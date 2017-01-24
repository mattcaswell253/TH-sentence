//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var firstSentence = $("#firstSentence").val();

    $("#result").text(firstSentence);

  })
})
