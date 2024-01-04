var readlineSync = require("readline-sync");

console.log("Welcome to the Endgame Quiz!");
var score = 0 ;
function check(youranswer, answer ){  
  if(answer == youranswer){
    console.log("you are right !");
    score = score +1 ;
  }
}


var arr = [{
            question : "What is Vishal's favourite actress ?",
            answer : "Dani Daniels"
          } , 
          {
            question :"What is Vishal's favourite sport ?",
            answer : "Cricket"
          }]

for( var i = 0 ; i < arr.length ; i++)
  {
    var currentquestion = arr[i];
    var answer = currentquestion.answer;
    var youranswer = readlineSync.question(currentquestion.question);
    check(youranswer, answer);
    console.log(score);
  }