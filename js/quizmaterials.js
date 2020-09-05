
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