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
]var button1= document.querySelector('#btn-1');
var button2= document.querySelector('#btn-2');
var button3= document.querySelector('#btn-3');
 
function questionElement(index){
    let question = document.querySelector("question");
    let button = document.querySelector("btn");
    document.querySelector("question").textContent = question[index].questions;
    document.querySelector("btn-0").textContent = question[index].options;
    document.querySelector("btn-1").textContent = question[index].options;
    document.querySelector("btn-2").textContent = question[index].options;
    document.querySelector("btn-3").textContent = question[index].options;
    }
button0.addEventListener("click", function(event) {
 console.log('event', event.target.id)
 answer(event.target.id)
 count++;
 showQuestion(count);


});
button1.addEventListener("click", function(event) {
 console.log('event', event.target.id)
 answer(event.target.id)
 count++;
 showQuestion(count);
});
button2.addEventListener("click", function(event) {
 console.log('event', event.target.id)
 answer(event.target.id)
 count++;
 showQuestion(count);
});

button2.addEventListener("click", function(event) {
 console.log('event', event.target.id)
 answer(event.target.id)
 count++;
 showQuestion(count);
});
// event listener for buttons
var button0= document.querySelector('#btn-0');
var button1= document.querySelector('#btn-1');
var button2= document.querySelector('#btn-2');
var button3= document.querySelector('#btn-3');
 
function questionElement(index){
    let question = document.querySelector("question");
    let button = document.querySelector("btn");
    document.querySelector("question").textContent = question[index].questions;
    document.querySelector("btn-0").textContent = question[index].options;
    document.querySelector("btn-1").textContent = question[index].options;
    document.querySelector("btn-2").textContent = question[index].options;
    document.querySelector("btn-3").textContent = question[index].options;
    }

button0.addEventListener("click", function(event) {
    console.log('event', event.target.id)
    answer(event.target.id)
    count++;
    showQuestion(count);
   
   
   });
   button1.addEventListener("click", function(event) {
    console.log('event', event.target.id)
    answer(event.target.id)
    count++;
    showQuestion(count);
   });
   button2.addEventListener("click", function(event) {
    console.log('event', event.target.id)
    answer(event.target.id)
    count++;
    showQuestion(count);
   });
   
   button2.addEventListener("click", function(event) {
    console.log('event', event.target.id)
    answer(event.target.id)
    count++;
    showQuestion(count);
   });
   
function chooseAnswer(id){
    if (id === question[count].option) {
        Audio.play();
    } else {
        timeLeft = timeLeft - 5
    }
}

function correctAnswer (id){
    if (id === correctAnswer.option) {
        
    }
}


