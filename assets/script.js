const questions = [
{
    question: "Which One Of these is Not a JavaScript Data Type",
    answer: 
    [
        {text: "Array", isCorrect: false},
        {text: "String", isCorrect: false},
        {text: "Word", isCorrect: true},
        {text: "Number", isCorrect: false},
    ]
},
{
    question: "Arrays Can Store Which Data Type",
    answer: 
    [
        {text: "Numbers", isCorrect: false},
        {text: "Strings", isCorrect: false},
        {text: "Booleans", isCorrect: false},
        {text: "All Of The Above", isCorrect: true},
    ]
},
{
    question: "How would you define that you want an Array",
    answer: 
    [
        {text: "Quotes", isCorrect: false},
        {text: "Parentheses", isCorrect: false},
        {text: "Square Bracket", isCorrect: true},
        {text: "Comma", isCorrect: false},
    ]
},

]
const quiz = document.querySelector("#quizcontent")
const question = document.querySelector("#question")
const startbtn = document.querySelector('#startbutton')
const answerbtns = document.querySelector('.answer')

var QuestionIndex = 0
var score = 0

function startquiz() {
    console.log("quiz started");
    quiz.setAttribute("style", "display: flex")
    currentQuestion = 0;
    score = 0;
    displayquestion();
}

function displayquestion() {
    var currentQuestion = questions[QuestionIndex];
    var questionnum = QuestionIndex + 1
    question.innerHTML = questionnum + "." + currentQuestion.question;

    var answer1 = document.querySelector("#answer1").innerHTML = questions[QuestionIndex].answer[0].text
    var answer2 = document.querySelector("#answer2").innerHTML = questions[QuestionIndex].answer[1].text
    var answer3 = document.querySelector("#answer3").innerHTML = questions[QuestionIndex].answer[2].text
    var answer4 = document.querySelector("#answer4").innerHTML = questions[QuestionIndex].answer[3].text

}

startquiz()