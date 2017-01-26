function wordReplace(firstSentence) {
  var splitSentence = firstSentence.split(" ");
  var answer = "";
  for (var i = 0; i < splitSentence.length; i++) {
    var splitWord = splitSentence[i];
    if (splitWord[0] === "t" && splitWord[1] === "h") {
      return splitWord.toUpperCase();
    } else {
      return splitWord;
    }
  }
  return answer;
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
    // $("#result").text(splitWord);

    wordReplace(firstSentence);
  })
})
