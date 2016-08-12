# 2fa-wtf

This is the repository for the https://2fa.wtf page.

All pages are generated from the markdown files you can see here. The [`app`](https://github.com/dkundel/2fa-wtf/tree/master/app) folder points is where all the generation is happening.

## Requirements

- Node.js 4.0 or higher
- For now a Unix operating system or a unix shell.

## Setup

```sh
git clone https://github.com/dkundel/2fa-wtf.git
cd 2fa-wtf/app
npm install
```

### How to run locally

```sh
npm run dev
```

This will build all files and spin up an auto-refreshing server.

Attention: When the Markdown files are regenerated you need to manually refresh the page once more at the moment.

### How to build

```sh
npm run build
```

This will build all necessary files into the `app/dist` folder.

### How to serve without building

```sh
npm run serve
```

This will serve the content from the `app/dist` folder.

### Others

You'll find more build commands in the `scripts` part of the `package.json`.


## Contributors

Dominik Kundel <dominik.kundel@gmail.com>