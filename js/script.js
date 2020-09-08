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

//var wrongaudioEl = document.querySelector('#wrong-audio');
//var rightaudioEl = document.querySelector('#right-audio');

var audiofartEl = new Audio('fart-1.wav');
var audiocrowdEl = new Audio('crowd-cheering.mp3');
var audiokidsEl = new Audio('kids-cheering.mp3');

var liEl = document.querySelector('#saved-names');
document.getElementById('expand').style.display = 'none';




var expandEl = document.querySelector("#collapsible-howto");

expandEl.addEventListener('click',

    function expandContent() {

        if (document.getElementById('expand').style.display == 'block') {
            document.getElementById('expand').style.display = 'none';
        }
        else {
            document.getElementById('expand').style.display = 'block';
        }


    }

)


//time element
var secondsdisplayEl = document.querySelector("#seconds");
//score element
var scoreEl = document.querySelector('#score');

var intropageEl = document.querySelector("#intropage");

//hiding input form score
var inputScoreEl = document.querySelector('#input-data-container');

//hide question 
questioncontainerEl.style.display = "none";

//hide score input homepage 
inputScoreEl.style.display = "none";


//image element
var heartshapeEl = document.createElement('IMG');
heartshapeEl.setAttribute("src", "images/white-heart.png");
heartshapeEl.setAttribute("width", "300");

var brokenheartEl = document.createElement('IMG');
brokenheartEl.setAttribute("src", "images/broken-heart.png");
brokenheartEl.setAttribute("width", "300");



var current_question = 0;

var current_score = 0;
var check_wrong_times = 0;



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
        //alert("you are right");
        audiokidsEl.play();

        //showing heart image if right
        document.body.appendChild(heartshapeEl);

        current_question++;
        showQuestions();

        //added score if right
        current_score = current_score + 10;
        console.log("this is score: " + current_score);
        check_wrong_times = 0

    }
    else {
        alert("you are wrong");
        remainingSecond = remainingSecond - 10;
        if (remainingSecond < 0) {
            remainingSecond = 0;
        }

        check_wrong_times++;
        audiofartEl.play();

        //showing broken heart image if wrong


        alert('You have got ' + (3 - check_wrong_times) + ' attempts left');
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
        inputScoreEl.style.display = "block";
        questioncontainerEl.style.display = "none";
    }
}



function showQuestions() {

    questioncontainerEl.style.display = "block";

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

var remainingSecond = 20;

//set timer
function triggerTimer() {

    var intervalHandle = setInterval(
        function () {
            displayClockEl.innerHTML = remainingSecond;
            console.log(remainingSecond);

            if (remainingSecond <= 0) {
                clearInterval(intervalHandle)
                alert('Times Up')
                inputScoreEl.style.display = "block";
                questioncontainerEl.style.display = "none";

            }
            remainingSecond--;


        }, 1000);
}


//local storage
var scorelistEl = document.querySelector('#list');

//get submit button and add event handler
var datasubmitEl = document.querySelector('#data-submit');


datasubmitEl.addEventListener('click',

    function () {


        var usernameInput = document.querySelector("#username").value;
        //create object from submit button
        var user = {
            userName: usernameInput
        }
        localStorage.setItem("username", JSON.stringify(user));

    });
