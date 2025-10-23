import React from 'react';

function App() {

const questions = [
    {
        questionText: 'What is my favorite color?',
        answerOptions: [
            { answerText: 'Yellow', isCorrect: false},
            { answerText: 'Black', isCorrect: false},
            { answerText: 'Pink', isCorrect: false},
            { answerText: 'Blue', isCorrect: true},
        ],
    },

    {
        questionText: 'Without lokking at my name how do I spell it?',
        answerOptions: [
            { answerText: 'Sadiya', isCorrect: true},
            { answerText: 'Sadia', isCorrect: false},
            { answerText: 'Sadiyah', isCorrect: false},
            { answerText: 'Sadiyya', isCorrect: false},
        ],

    },

        {
        questionText: 'What is my Zodiac sign?',
        answerOptions: [
            { answerText: 'Arias', isCorrect: false},
            { answerText: 'Pisces', isCorrect: true},
            { answerText: 'Leo', isCorrect: false},
            { answerText: 'Cancer', isCorrect: false},
        ],

    },
]
    return (
        <div className="App">
            <div>
                <div>Quiz App</div>
                <div>{questions[0].questionText}</div>
                {questions[0].answerOptions.map((option, index) =>(
                    <button>{option.answerText}</button>
                ))}
            </div>
        </div>
    )
}

export default App;