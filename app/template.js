'use strict';

const path = require('path');
const fs = require('fs');
const jade = require('jade');
const mkdirp = require('mkdirp');
const recursive = require('recursive-readdir');
const kramed = require('kramed');

const OUT_DIR = path.resolve(__dirname, 'dist');
const INPUT_DIR = path.resolve(__dirname, '..');
const TEMPLATE_DIR = path.resolve(__dirname, 'templates');
const SEARCH_DIRECTORIES = ['use'];

const TEMPLATE = jade.compileFile(path.join(TEMPLATE_DIR, 'index.jade'));

function promiseHandler(resolve, reject) {
  return (err, result) => {
    if (err) {
      return reject(err);
    }

    return resolve(result);
  }
}

function onlyMarkdownFilter(file, stats) {
  let name = path.basename(file)
  let isValidDirectory = stats.isDirectory() && SEARCH_DIRECTORIES.indexOf(name) !== -1;
  let isValidFile = !stats.isDirectory() && path.extname(file) === '.md';
  return !isValidFile && !isValidDirectory;
}

function findFiles() {
  return new Promise((resolve, reject) => {
    console.log(INPUT_DIR);
    recursive(INPUT_DIR, ['README.md', onlyMarkdownFilter], promiseHandler(resolve, reject));
  });
}

function convertToFileData(filePath) {
  let templatePath = filePath;
  let targetPath = filePath.replace(INPUT_DIR, OUT_DIR).replace(/\.md$/, '.html');
  let targetDir = path.dirname(targetPath);

  return { templatePath, targetDir, targetPath };
}

function readContent(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', promiseHandler(resolve, reject));
  });
}

function writeContent(fileName, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, 'utf8', promiseHandler(resolve, reject));
  });
}

function mkdirpWrapper(folderName, content) {
  return new Promise((resolve, reject) => {
    mkdirp(folderName, promiseHandler(resolve, reject));
  });
}

function templateContent(content, templatePath) {
  const page = path.basename(templatePath, '.md');
  const html = kramed(content);
  return TEMPLATE({ content: html, page });
}

function templateFile(fileData) {
  return readContent(fileData.templatePath)
    .then(content =>{
      return templateContent(content, fileData.templatePath)
    })
    .then(content => {
      return mkdirpWrapper(fileData.targetDir).then(() => content);
    })
    .then(content => {
      return writeContent(fileData.targetPath, content);
    })
    .then(() => {
      return fileData;
    });
}

findFiles()
  .then(files => {
    return files.map(convertToFileData);
  })
  .then(files => {
    console.log(files);
    return files;
  })
  .then(files => {
    return Promise.all(files.map(templateFile));
  })
  .catch(err => {
    console.error('Error');
    console.error(err.message);
  });