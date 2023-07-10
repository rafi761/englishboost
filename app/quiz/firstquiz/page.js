'use client';

import styles from "./page.module.css"
import React, { useState } from 'react';
import { quiz } from '../data.js';
import Link from "next/link";

const FirstQuiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Quiz Page</h1>
      <div>
        <h2 className={styles.h2}>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className={styles.quizcontainer}>
            <h3 className={styles.h3}>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`
                 ${selectedAnswerIndex === idx ? `${styles.liselected}` : `${styles.lihover}`} ${styles.li} `
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className={`${styles.button} ${styles.btn}`}>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className={`${styles.button} ${styles.btndisabled}`}>
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.quizcontainer}>
            <h3 className={styles.h3}>Results</h3>
            <h3 className={styles.h3}>Overall {(result.score / 25) * 100}%</h3>
            <p className={styles.p}>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className={styles.p}>
              Total Score: <span>{result.score}</span>
            </p>
            <p className={styles.p}>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className={styles.p}>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <Link href="/quiz">
              <button className={styles.button}>Restart</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstQuiz;