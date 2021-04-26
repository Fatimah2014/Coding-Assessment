// add a start elemnent and function to begin the quiz//

const startButton = document.getElementById('start')
const questionContainer = document.getElementById('quest-cont')
const questionElement = document.getElementById('question')
const answerElement= document.getElementById('ans-btn')
const beginElement=document.getElementById('begin')
let shuffleQuestion,currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log('started')
beginElement.classList.add('hide')
shuffleQuestion = question.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainer.classList.remove('hide')
nextQuestion()

}
function nextQuestion() {
    showQuestion(shuffleQuestion[currentQuestion])
    
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.option.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    if (option.correct) {
        button.dataset.correct = option.correct
    }
        button.addEventListener("click" ,chooseAnswer)
        answerElement.appendChild(button)
    }

      )

}

function resetState() {
    nextButton.classList.add("hide")
    while (answerElement.fistChild) {
        answerElement.removeChild
        (answerElement.firstChild)
    }
}


const questions = [ 
    {
    question: "what does HTML stand for?",
    answer: "btn-2",
    options: [
     "home tool Markup Language",
     "Hyper Link and text Mark up Langueage",
     "Hyper Text Markup Language",
     "Home text  Markup Languege", 
    ]
},
{
question:"Choose the correct HTML element for the largest heading:",
answer: "btn-2",
option: [
    "<h6>",
    "<heading>",
    "<h1>",
    "<head>",
    ]
},
{
question: "What does css stand for?",
answer:"btn-0",
option: [
    "WHat does css stand for?",
    "Cascading Style Sheet",
    "Colorful Style Sheets",
    "Computer Stle Sheets",
    "Creative Style Sheets",
    ]
},
{
question: "Which CSS property controls the text size?",
answer: "btn-1",
option: [
    "text-size",
    "font-size",
    "text-style",
    "font-size",
]
},
{
question: "Where is the correct place to insert a JavaScript?",
answer:"btn-3", 
option:[
    "Both the <head> section and the <body> section are correct",
    "The <body> section",
    "The <head> section",
    "After the <body> section",
    
]
},
{
question: 'How do you write "Hello World" in an alert box?',
answer: 'button',
option:[
   "msgBox('Hello World')",
    "msg('Hello World')",
    "alertBox('Hello World')",
    "alert('Hello World')",
]
}
]