//setting the element
var questioncontainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerbtnEl = document.querySelector('#answer-buttons');
var startbtnEl = document.querySelector('#start-btn');
var nextbtnEl = document.querySelector('#next-btn');



var firstanswerEl = document.querySelector('#first-answer');
var secondanswerEl = document.querySelector('#second-answer');
var thirdanswerEl = document.querySelector('#third-answer');
var fourthanswerEl = document.querySelector('#fourth-answer')


var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");


var current_question = 0;

//list of questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { label: 'js', correct: false },
            { label: 'script', correct: false },
            { label: 'scripting', correct: false },
            { label: 'javascript', correct: true }
        ]
    },

    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { label: 'The <head section>', correct: false },
            { label: 'The <body> section', correct: false },
            { label: 'Both the <head> section and <body> section', correct: true },
            { label: 'All wrong', correct: false }
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js?',
        answers: [
            { label: '<script href="xxx.js>', correct: false },
            { label: '<script name="xxx.js>', correct: false },
            { label: '<script src="xxx.js>', correct: true },
            { label: '<script source="xxx.js>', correct: false }
        ]
    },

    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answers: [
            { label: 'True', correct: true },
            { label: 'False', correct: false },
            { label: 'Maybe', correct: false },
            { label: 'Not sure', correct: false }
        ]
    },

    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { label: 'function = myFunction()', correct: false },
            { label: 'function:myFunction()', correct: false },
            { label: 'function myFunction()', correct: true },
            { label: 'function.myFunction()', correct: false }
        ]
    },

    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { label: 'myFunction()', correct: true },
            { label: 'call function myFunction()', correct: false },
            { label: 'call myFunction()', correct: false },
            { label: 'myFunction().call', correct: false }
        ]
    },

    {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { label: 'if i = 5', correct: false },
            { label: 'if i = 5 then', correct: false },
            { label: 'if(i === 5)', correct: true },
            { label: 'if i === 5 then', correct: false }
        ]
    },

    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            { label: 'if i =! 5 then', correct: false },
            { label: 'if i <> 5', correct: false },
            { label: 'if( i != 5)', correct: true },
            { label: 'if i === 5', correct: false }
        ]
    },

    {
        question: 'How does a WHILE loop start?',
        answers: [
            { label: '<script href="xxx.js>', correct: false },
            { label: '<script name="xxx.js>', correct: false },
            { label: '<script src="xxx.js>', correct: true },
            { label: '<script source="xxx.js>', correct: false }
        ]
    },

    {
        question: 'How does a FOR loop start?',
        answers: [
            { label: 'for(i <= 5; i++)', correct: false },
            { label: 'for(i = 0; i <= 5; i++)', correct: true },
            { label: 'for(i = 0; i <= 5)', correct: false },
            { label: 'for i = 1 to 5', correct: false }
        ]
    }
]
showQuestions();

startbtnEl.addEventListener('click',
    function () {
        current_question++
        if (current_question >= questions.length) {
            alert("There are no more questions");
            return;
        }
        showQuestions();
    }
);

firstanswerEl.addEventListener('click',
    function () {
        answerCheker(0)
    }
)

secondanswerEl.addEventListener('click',
    function () {
        answerCheker(1)
    }
)

thirdanswerEl.addEventListener('click',
    function () {
        answerCheker(2)
    }
)

fourthanswerEl.addEventListener('click',
    function () {
        answerCheker(3)
    }
)

function checkResult(checkeranswer) {
    var checkeragain = questions[current_question].answers[checkeranswer].correct;
    if (checkeragain === true) {
        alert("you are right");
        current_question++;
        showQuestions();
    }
    else {
        alert("you are wrong");
        var minusSecond = remainingSecond - 10;
        return minusSecond;
    }
}

function answerCheker(checkeranswer) {
    if (checkeranswer === 0) {
        checkResult(checkeranswer);
    }
    else if (checkeranswer === 1) {
        checkResult(checkeranswer);
    }

    else if (checkeranswer === 2) {
        checkResult(checkeranswer);
    }

    else if (checkeranswer === 3) {
        checkResult(checkeranswer);
    }
}



function showQuestions() {
    console.log(current_question);
    var question_item = questions[current_question];

    //document.querySelector("#question").innerHTML = JSON.stringify(question_item);
    document.querySelector("#question").innerHTML = question_item.question;

    document.querySelector('#first-answer').innerText = question_item.answers[0].label;
    document.querySelector('#second-answer').innerText = question_item.answers[1].label;
    document.querySelector('#third-answer').innerText = question_item.answers[2].label;
    document.querySelector('#fourth-answer').innerText = question_item.answers[3].label;

}

var displayClockEl = document.querySelector('#seconds');

var remainingSecond = 100;

//set timer
var intervalHandle = setInterval(
    function () {
        displayClockEl.innerHTML = remainingSecond;
        console.log(remainingSecond);

        if (remainingSecond <= 0) {
            clearInterval(intervalHandle)
            alert('Times Up')
        }
        remainingSecond--;

    }, 1000);

