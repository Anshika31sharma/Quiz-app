import React, { useState } from 'react';
import OptionCard from './OptionCard';

function QuestionCard({ question, options, correctAnswer, onAnswer, onNextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (optionText) => {
    setSelectedOption(optionText);
  };

  const handleAnswer = () => {
    if (selectedOption !== null) {
      console.log('selectedOption:', selectedOption);
      console.log('correctAnswer:', correctAnswer);
      const isCorrect = selectedOption === correctAnswer;
      console.log('isCorrect:', isCorrect);
      setIsAnswered(true);
      onAnswer(isCorrect);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    onNextQuestion();
  };

  return (
    <div className="question-card">
      <p>{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            text={option}
            isSelected={selectedOption === option}
            onSelect={handleOptionSelect}
            disabled={isAnswered}
          />
        ))}
      </div>
      <div>
        <button onClick={handleAnswer} disabled={isAnswered}>
          Submit Answer
        </button>
        {isAnswered && (
          <p className={selectedOption === correctAnswer ? 'correct' : 'incorrect'}>
            {selectedOption === correctAnswer ? 'Correct!' : 'Incorrect!'}
          </p>
        )}
      </div>
      {isAnswered && (
        <button onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}
export default QuestionCard;
