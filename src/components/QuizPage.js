import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function QuizPage() {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const topicToCodeMap = {
sports: 21,
science: 17,
history: 23,
  };

  useEffect(() => {
    const code = topicToCodeMap[topic];
    fetch(`https://opentdb.com/api.php?amount=${code}&category=${code}&difficulty=medium&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      })
      .catch((error) => {
        console.error('Error fetching quiz questions:', error);
      });
  }, [topic]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedAnswer) => {
    console.log(currentQuestion)
    setUserAnswers([...userAnswers, selectedAnswer]);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <div>
      <h2>Quiz on {topic}</h2>
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion.question}
          options={[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]}
          correctAnswer={currentQuestion.correct_answer}
          onAnswer={handleAnswer}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
}
export default QuizPage;
