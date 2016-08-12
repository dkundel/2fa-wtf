jQuery(function () {
  var template = [
  '<input id="strengthTestInput" type="password" placeholder="Enter your password to test it">',
  '<div id="strengthTestResult">',
    '<div id="strengthTestBar"></div>',
    '<p id="strengthTestText">Estimated time to crack: ',
      '<span id="strengthTestTime"></span>',
    '</p>',
    '<p id="strengthTestWarning"></p>',
    '<p id="strengthTestSuggestion"></p>',,
  '</div>'
  ].join('');
  $('#strengthTest').html(template);

  var $input = $('#strengthTestInput');
  $input.on('keyup', function () {
    var pw = $input.val();
    var result = zxcvbn(pw);
    $('#strengthTestWarning').hide();
    $('#strengthTestSuggestion').hide();

    $('#strengthTestBar').attr('data-val', result.score);
    $('#strengthTestBar').width(((result.score + 1) * 20) + '%');
    var duration = result.crack_times_seconds.online_throttling_100_per_hour;
    $('#strengthTestTime').text(moment.duration(duration, 'seconds').humanize());
    if (result.feedback) {
      if (result.feedback.warning) {
        $('#strengthTestWarning').html('<strong>Warning:</strong><br>' + result.feedback.warning).show();
      }

      if (result.feedback.suggestions.length !== 0) {
        $('#strengthTestSuggestion').html('<strong>Suggestion:</strong><br>' + result.feedback.suggestions.join('<br>')).show();
      }
    }
  });
});