var timeleft = 100; // Time Given User to Commplete Quiz
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
    question: "Arrays Can Not Store Which Data Type",
    answer: 
    [
        {text: "Numbers", isCorrect: false},
        {text: "Strings", isCorrect: false},
        {text: "Booleans", isCorrect: true},
        {text: "All Of The Above", isCorrect: false},
    ]
},
{
    question: "How would you define an Array",
    answer: 
    [
        {text: "Quotes", isCorrect: false},
        {text: "Parentheses", isCorrect: false},
        {text: "Square Bracket", isCorrect: true},
        {text: "Comma", isCorrect: false},
    ]
},

]

console.table(questions)

const start = document.querySelector("#start")
const quiz = document.querySelector("#quizcontent")
const question = document.querySelector("#question")
const startbtn = document.querySelector('#startbutton')
const answerbtns = document.querySelector('.answer')
const endcontent = document.querySelector('#endcontent')
const finalscore= document.querySelector('finalscore')
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

var QuestionIndex = 0
//Starts Timer and displays first set of questions, also check Ending conditions
function startquiz() {
    console.log("quiz started");
    quiz.setAttribute("style", "display: flex")
    start.setAttribute("style", "display: none")
    currentQuestion = 0;
    displayquestion();
    var quiztimer = setInterval(function(){
        timeleft--
        document.querySelector('#timer').textContent = timeleft
        if(timeleft <=0 || QuestionIndex >= questions.length ){
            quizEnd()
            clearInterval(quiztimer)
        }       
    }, 1000)
}
// Displays
function displayquestion() {
    var currentQuestion = questions[QuestionIndex];
    var questionnum = QuestionIndex + 1
    question.innerHTML = questionnum + "." + currentQuestion.question;
//Assigns Each Button Ethier a true or false depending on the "isCorrect" value in the questions object
    answer1.innerHTML = questions[QuestionIndex].answer[0].text
    answer2.innerHTML = questions[QuestionIndex].answer[1].text
    answer3.innerHTML = questions[QuestionIndex].answer[2].text
    answer4.innerHTML = questions[QuestionIndex].answer[3].text
}
// Checks if Answer is Correct
function isAnswerCorrect(e){
    console.log("answer checked: " + e)
    QuestionIndex++
    if(e == false){
        timeleft = timeleft - 10
        document.querySelector('#response').textContent = "Incorrect!"
    } else{
        document.querySelector('#response').textContent = "Correct!"
    }
    displayquestion()
}
var Scores = [JSON.parse(localStorage.getItem("scores"))];
var li = document.createElement("li")
// Adds score to Local Storage
var submitbtn = document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault()
    var intials = document.querySelector("#intials").value
    Scores.push({
        user: intials, finalscore: timeleft
    })
    localStorage.setItem("scores", JSON.stringify(Scores))
})
function quizEnd(){ // Called when timer Reaches 0 or no more questions left
    console.log("quiz ended")
    endcontent.setAttribute("style", "display: flex") //Displays form and Final Score Elements
    quiz.setAttribute("style", "display: none")
    document.querySelector("#finalscore").textContent = timeleft  
}
// Event Listeners
startbtn.addEventListener("click", startquiz)
answer1.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[0].isCorrect)})
answer2.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[1].isCorrect)})
answer3.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[2].isCorrect)})
answer4.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[3].isCorrect)})

