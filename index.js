//begin quiz on button click
function runQuiz(){

var questionsArr = [
//1
      {
        question: 'Canada is the second-largest country in the world.',
        answer: "true"
      },
//2
      {
        question: 'An element is a pure substance that contains only one type of atom.',
        answer: "true"
      },
//3
      {
        question: 'Mount Everest is present in the Himalayas.',
        answer: "true"
      },
//4
      {
        question: 'Scapula is also called a shoulder bone.',
        answer: "true"
      },
//5
      {
        question: 'The Nile is the longest river in Africa.',
        answer: "true"
      },
//6
      {
        question: 'All of these questions have been truths.',
        answer: "true"
      }
];

//score
var score = 0;

//loop
for(var i=0; i < questionsArr.length; i++){
  var response = window.question(questionsArr[i].question);
  if(response == questionsArr[i].answer){
    score++;
    alert("Correct!");
  }else {
    alert("Wrong!");
  }
}
alert("You scored" + score + "out of" + questionsArr.length);
}
