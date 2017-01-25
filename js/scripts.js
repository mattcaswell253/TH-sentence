//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var firstSentence = $("#firstSentence").val();
    var up = firstSentence.toUpperCase();
    $("#result").text(up);
    // if ($(firstSentence).charAt(0) === t) 

  })
})
