//setting the element
var questioncontainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerbtnEl = document.querySelector('#answer-buttons');
var startbtnEl = document.querySelector('#start-btn');
var nextbtnEl = document.querySelector('#next-btn');

var scoreEl = document.querySelector('#score');

var firstanswerEl = document.querySelector('#first-answer');
var secondanswerEl = document.querySelector('#second-answer');
var thirdanswerEl = document.querySelector('#third-answer');
var fourthanswerEl = document.querySelector('#fourth-answer')

var wrongaudioEl = document.querySelector('#wrong-sound');
//var rightaudioEl = document.querySelector('#right-audio');

var secondsdisplayEl = document.querySelector("#seconds");


var intropageEl = document.querySelector("#intropage");

//hiding input form score
var inputScore = document.querySelector('#input-data-container');

//showing heart image
var heartshapeEl = document.querySelector('#heart-shape');

var current_question = 0;

var current_score = 0;
var check_wrong_times = 0;

questioncontainerEl.style.visibility = "hidden";

showQuestions();


//start button event listener
startbtnEl.addEventListener('click',
    function () {
        triggerTimer();
        current_question++;
        if (current_question >= questions.length) {
            alert("There are no more questions");
            return;
        }
        showQuestions();
        //hidden introduction
        intropageEl.style.visibility = "hidden";

        //hidden start button once start
        startbtnEl.style.visibility = "hidden";

        //show question
        questioncontainerEl.style.visibility = "none";

    },

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

        //added score if right
        current_score = current_score + 10;
        console.log("this is score: " + current_score);
        check_wrong_times = 0

        //showing heart image if right
        document.body.appendChild(heartshapeEl);
    }
    else {
        alert("you are wrong");
        remainingSecond = remainingSecond - 10;
        check_wrong_times++;
        alert('You have got 3 attempts left');

        //set 3 attempts maximal
        if (check_wrong_times === 3) {
            current_question++;
            showQuestions();
            check_wrong_times = 0
        }

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
    if (current_score == questions.lengh) {
        inputScore.style.display = "block";
        questioncontainerEl.style.display = "none";
    }
}



function showQuestions() {

    questioncontainerEl.style.visibility = "block";
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

var remainingSecond = 10;

//set timer
function triggerTimer() {

    var intervalHandle = setInterval(
        function () {
            displayClockEl.innerHTML = remainingSecond;
            console.log(remainingSecond);

            if (remainingSecond <= 0) {
                clearInterval(intervalHandle)
                alert('Times Up')
                inputScore.style.display = "block";
                questioncontainerEl.style.display = "none";

            }
            remainingSecond--;

        }, 1000);
}

//play sound function 
function playAudio() {
    wrongaudioEl.play();
}

//local storage
var scorelistEl = document.getElementById('#list');
var nameEl = document.getElementById('#name');


//get submit button and add event handler
//var datasubmitEl = document.getElementById('#data-submit');
//datasubmitEl.addEventListener('click', addToLocalStorage(), false);

//if data, get data from localStorage and display on page load
if (window.localStorage.getItem('name')) {
    addToLocalStorage();
}


//function to add to local storage
function addToLocalStorage() {

    //store
    localStorage.setItem("#name", "Alvaro");

    //retrieve
    document.getElementById("#score").innerHTML = localStorage.getItem("#name");

    //topScoreEl = JSON.parse(localStorage.getItem('name'));

}