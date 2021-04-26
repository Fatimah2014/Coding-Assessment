// add a start elemnent and function to begin the quiz//

const startButton = document.getElementById('start')
const questionContainer = document.getElementById('quest-cont')
const questionElement = document.getElementById('question')
const answerElement= document.getElementById('ans-btn')
const beginElement=document.getElementById('begin')
const optionBtnElements = document.querySelectorAll(".btn")
const timeElement = document.getElementById("time")
let shuffleQuestion, currentQuestion, countdown, score;


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    beginElement.classList.add('hide')
    // shuffleQuestion = question.sort(() => Math.random() - .5)
    currentQuestion = 0;
    questionContainer.classList.remove('hide')
    startTimer()
    nextQuestion()
}

function nextQuestion() {
    showQuestion()
    
}

function showQuestion() {
    questionElement.innerText = questions[currentQuestion].question
    optionBtnElements.forEach( (element, i) => {
        element.textContent = questions[currentQuestion].options[i];
        element.addEventListener("click", checkAnswerAndIterate);
    })
    // question.option.forEach(option => {
    // const button = document.createElement('button')
    // button.innerText = option.text
    // button.classList.add('btn')
    // if (option.correct) {
    //     button.dataset.correct = option.correct
    // }
    //     button.addEventListener("click" ,chooseAnswer)
    //     answerElement.appendChild(button)
    // }

    //   )

}

function checkAnswerAndIterate() {
    console.log(this.id)
    if(this.id === questions[currentQuestion].answer){
        console.log('correct')
    }else {
        countdown-= 5;
        console.log('incorrect')
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion()
    }
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerElement.fistChild) {
        answerElement.removeChild
        (answerElement.firstChild)
    }
}

function startTimer (){
    countdown = 150;
    var interval = setInterval(function (){
        countdown --;
        timeElement.textContent = countdown;

        if(countdown <=0 || currentQuestion >= questions.length){
            clearInterval(interval)
            //Quiz ending function
            //something here
            //pls
            //help
    
        }
    }, 1000)
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
options: [
    "<h6>",
    "<heading>",
    "<h1>",
    "<head>",
    ]
},
{
question: "What does css stand for?",
answer:"btn-0",
options: [
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
options: [
    "text-size",
    "font-size",
    "text-style",
    "font-size",
]
},
{
question: "Where is the correct place to insert a JavaScript?",
answer:"btn-3", 
options:[
    "Both the <head> section and the <body> section are correct",
    "The <body> section",
    "The <head> section",
    "After the <body> section",
    
]
},
{
question: 'How do you write "Hello World" in an alert box?',
answer: 'button',
options:[
   "msgBox('Hello World')",
    "msg('Hello World')",
    "alertBox('Hello World')",
    "alert('Hello World')",
]
}
]
// var button1= document.querySelector('#btn-1');
// var button2= document.querySelector('#btn-2');
// var button3= document.querySelector('#btn-3');
 
// function questionElement(index){
//     let question = document.querySelector("question");
//     let button = document.querySelector("btn");
//     document.querySelector("question").textContent = question[index].questions;
//     document.querySelector("btn-0").textContent = question[index].options;
//     document.querySelector("btn-1").textContent = question[index].options;
//     document.querySelector("btn-2").textContent = question[index].options;
//     document.querySelector("btn-3").textContent = question[index].options;
//     }
// button0.addEventListener("click", function(event) {
//  console.log('event', event.target.id)
//  answer(event.target.id)
//  count++;
//  showQuestion(count);


// });
// button1.addEventListener("click", function(event) {
//  console.log('event', event.target.id)
//  answer(event.target.id)
//  count++;
//  showQuestion(count);
// });
// button2.addEventListener("click", function(event) {
//  console.log('event', event.target.id)
//  answer(event.target.id)
//  count++;
//  showQuestion(count);
// });

// button2.addEventListener("click", function(event) {
//  console.log('event', event.target.id)
//  answer(event.target.id)
//  count++;
//  showQuestion(count);
// });
// // event listener for buttons
// var button0= document.querySelector('#btn-0');
// var button1= document.querySelector('#btn-1');
// var button2= document.querySelector('#btn-2');
// var button3= document.querySelector('#btn-3');
 
// function questionElement(index){
//     let question = document.querySelector("question");
//     let button = document.querySelector("btn");
//     document.querySelector("question").textContent = question[index].questions;
//     document.querySelector("btn-0").textContent = question[index].options;
//     document.querySelector("btn-1").textContent = question[index].options;
//     document.querySelector("btn-2").textContent = question[index].options;
//     document.querySelector("btn-3").textContent = question[index].options;
//     }

// button0.addEventListener("click", function(event) {
//     console.log('event', event.target.id)
//     answer(event.target.id)
//     count++;
//     showQuestion(count);
   
   
//    });
//    button1.addEventListener("click", function(event) {
//     console.log('event', event.target.id)
//     answer(event.target.id)
//     count++;
//     showQuestion(count);
//    });
//    button2.addEventListener("click", function(event) {
//     console.log('event', event.target.id)
//     answer(event.target.id)
//     count++;
//     showQuestion(count);
//    });
   
//    button2.addEventListener("click", function(event) {
//     console.log('event', event.target.id)
//     answer(event.target.id)
//     count++;
//     showQuestion(count);
//    });
   
// function chooseAnswer(id){
//     if (id === question[count].option) {
//         Audio.play();
//     } else {
//         timeLeft = timeLeft - 5
//     }
// }

// function correctAnswer (id){
//     if (id === correctAnswer.option) {
        
//     }
// }


