//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var firstSentence = $("#firstSentence").val();
    var words = firstSentence.split(" ");
    var th = words.startsWith("th");
    // var up = firstSentence.toUpperCase();
    // $("#result").text(up);
    $("#result").text(words);
  })
})


  if(th === true)
 firstSentence.toUpperCase();
