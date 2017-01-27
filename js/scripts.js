function wordReplace(firstSentence) {
  var splitSentence = firstSentence.split(" ");
  var answer = "";
  var firstAnswer = "";
  var secondAnswer = "";

  for (var i = 0; i < splitSentence.length; i++) {
    var splitWord = splitSentence[i];
    if (splitWord[0] === "t" && splitWord[1] === "h") {
      //these will have to end up WITHIN answer, in the right order
      firstAnswer = splitWord.toUpperCase();
    } else {
      //these will have to end up WITHIN answer, in the right order
      secondAnswer = splitWord.toLowerCase();
    }
  }
  //this is going to be the complete, altered sentence
  answer = firstAnswer + secondAnswer;
  return answer;
}




//user logic
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    // var firstSentence = $("#firstSentence").val();
    // var splitSentence = firstSentence.split(" ");
    // var th = words.startsWith("th");
    // var up = firstSentence.toUpperCase();
    // $("#result").text(up);
     $("#result").text(wordReplace);

    // wordReplace(answer);
  })
})
