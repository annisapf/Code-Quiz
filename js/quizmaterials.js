
//list of questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { label: 'A. js', correct: false },
            { label: 'B. script', correct: true },
            { label: 'C. scripting', correct: false },
            { label: 'D. javascript', correct: false }
        ]
    },

    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { label: 'A. The <head section>', correct: false },
            { label: 'B. The <body> section', correct: false },
            { label: 'C. Both the <head> section and <body> section', correct: true },
            { label: 'D. All wrong', correct: false }
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js?',
        answers: [
            { label: 'A. <script href="xxx.js>', correct: false },
            { label: 'B. <script name="xxx.js>', correct: false },
            { label: 'C. <script src="xxx.js>', correct: true },
            { label: 'D. <script source="xxx.js>', correct: false }
        ]
    },

    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answers: [
            { label: 'A. True', correct: true },
            { label: 'B. False', correct: false },
            { label: 'C. Maybe', correct: false },
            { label: 'D. Not sure', correct: false }
        ]
    },

    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { label: 'A. function = myFunction()', correct: false },
            { label: 'B. function:myFunction()', correct: false },
            { label: 'C. function myFunction()', correct: true },
            { label: 'D. function.myFunction()', correct: false }
        ]
    },

    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { label: 'A. myFunction()', correct: true },
            { label: 'B. call function myFunction()', correct: false },
            { label: 'C. call myFunction()', correct: false },
            { label: 'D. myFunction().call', correct: false }
        ]
    },

    {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { label: 'A. if i = 5', correct: false },
            { label: 'B. if i = 5 then', correct: false },
            { label: 'C. if(i === 5)', correct: true },
            { label: 'D. if i === 5 then', correct: false }
        ]
    },

    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            { label: 'A. if i =! 5 then', correct: false },
            { label: 'B. if i <> 5', correct: false },
            { label: 'C. if (i != 5)', correct: true },
            { label: 'D. if i === 5', correct: false }
        ]
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { label: 'A. alertBox("Hello World");', correct: false },
            { label: 'B. msg(:Hello World");', correct: false },
            { label: 'C. alert("Hello World");', correct: true },
            { label: 'D. msgBox("Hello World");', correct: false }
        ]
    },

    {
        question: 'How does a FOR loop start?',
        answers: [
            { label: 'A. for(i <= 5; i++)', correct: false },
            { label: 'B. for(i = 0; i <= 5; i++)', correct: true },
            { label: 'C. for(i = 0; i <= 5)', correct: false },
            { label: 'D. for i = 1 to 5', correct: false }
        ]
    }
]