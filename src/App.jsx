import React, { useState } from 'react';
import './App.css';

function App() {
    const questions = [
        {
            questionText: 'What is my favorite color?',
            answerOptions: [
                {answerText: 'Yellow', isCorrect: false},
                {answerText: 'Black', isCorrect: false},
                {answerText: 'Pink', isCorrect: false},
                {answerText: 'Blue', isCorrect: true},
            ],
        },

        {
            questionText: 'Without looking at my name, how is it spelled?',
            answerOptions: [
                {answerText: 'Sadiya', isCorrect: true},
                {answerText: 'Sadia', isCorrect: false},
                {answerText: 'Sadiyah', isCorrect: false},
                {answerText: 'Sadiyya', isCorrect: false},
            ],
        },

        {
            questionText: 'What is my Zodiac sign?',
            answerOptions: [
                {answerText: 'Arias', isCorrect: false},
                {answerText: 'Pisces', isCorrect: true},
                {answerText: 'Leo', isCorrect: false},
                {answerText: 'Cancer', isCorrect: true},
            ],
        },
    ];

    // State to track which question is showing
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // track selected answer
    const [selectedAnswer, setSelectAnswer] = useState(null);

    // Wrong or Right answer
    const handleAnswerClick = (isCorrect, index) => {
        setSelectAnswer(index);
        if (isCorrect) {
            alert('Correct');
        } else {
            alert('Wrong');
        }
    }

    // Move to next question
    const handleNextQuestion = () => {
        setSelectAnswer(null); // reset for next
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert('You reached the end of the quiz!');
        }
    };

    return (
        <div className="app-container">
            <div className="quiz-box">
                <h1>About Me Quiz App</h1>
                <p className="question-text">{questions[currentQuestion].questionText}</p>
                <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((option, index) => 
                    <button
                    key={index}
                className={`quiz-button ${
                    selectedAnswer === index 
                    ? option.isCorrect 
                    ? 'correct'
                    : 'wrong'
                    : ''
                }`}
            onClick={() => handleAnswerClick(option.isCorrect, index)} 
                >
                {option.answerText}
                </button>
            )}
                    <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
                    <p className="number-of-questions">Question {currentQuestion + 1} of {questions.length}</p>
                </div>
            </div>
        </div>
    )
}

export default App;
