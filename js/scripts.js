//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var firstSentence = $("#firstSentence").val();
    // var up = firstSentence.toUpperCase();
    var words = firstSentence.split(" ");
    // $("#result").text(up);
    $("#result").text(words);

  })
  function thcase()
})
