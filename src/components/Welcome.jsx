import React, { use } from 'react'

import { useContext } from 'react'

import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'

import './Welcome.css'   

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Welcome / Bem-vindo / bienvenido </h2>
        <p>Click the button below to begin.</p>
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}> Start Quiz </button>

        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome