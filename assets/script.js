var timeleft = 100;
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

function displayquestion() {
    var currentQuestion = questions[QuestionIndex];
    var questionnum = QuestionIndex + 1
    question.innerHTML = questionnum + "." + currentQuestion.question;

    answer1.innerHTML = questions[QuestionIndex].answer[0].text
    answer2.innerHTML = questions[QuestionIndex].answer[1].text
    answer3.innerHTML = questions[QuestionIndex].answer[2].text
    answer4.innerHTML = questions[QuestionIndex].answer[3].text
}

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
var Scores = JSON.parse(localStorage.getItem("scores"));
 
 

var submitbtn = document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault()
    var intials = document.querySelector("#intials").value

    Scores.push({
        user: intials, finalscore: timeleft
    })

    localStorage.setItem("scores", JSON.stringify(Scores))

    console.log()
        
})


function quizEnd(){
    console.log("quiz ended")
    endcontent.setAttribute("style", "display: flex")
    quiz.setAttribute("style", "display: none")
    document.querySelector("#finalscore").textContent = timeleft  
}

const highscorescontent = document.querySelector("#highscores")

console.log(Scores)
function displayScores(){
    highscorescontent.setAttribute('style', 'display: block')
    var list1 = document.querySelector("#highscores")

    
    scoresList = (arr) => {
        let items = arr.forEach(item =>{
            let li = document.createElement('li');
            li.textContent = Scores.user + Scores.finalscore
            list1.appendChild(li)
        })
    }
    scoresList(Scores.toArray())

}









const highscoresbtn = document.querySelector("#highscoresbtn").addEventListener("click", displayScores)
 
startbtn.addEventListener("click", startquiz)

answer1.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[0].isCorrect)
})
answer2.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[1].isCorrect)
})
answer3.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[2].isCorrect)
})
answer4.addEventListener("click", function(){
    isAnswerCorrect(questions[QuestionIndex].answer[3].isCorrect)
})

