function wordReplace(splitWord) {
var splitSentence = firstSentence.split(" ");
var splitWord = splitSentence[i];

for (var i = 0; i < splitWord.length; i++) {
  if (splitWord[0] === "t" && splitWord[1] === "h")
  splitWord.toUpperCase();
}

}




//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var firstSentence = $("#firstSentence").val();
    var splitSentence = firstSentence.split(" ");
    // var th = words.startsWith("th");
    // var up = firstSentence.toUpperCase();
    // $("#result").text(up);
    $("#result").text(wordReplace);

    wordReplace(splitWord)
  })
})
