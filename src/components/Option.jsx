import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => { 

    const [quizState, dispatch] = useContext(QuizContext);

    const optionClassName = [
        'option',
        quizState.answerSelected && option === answer ? 'correct' : '', 
        quizState.answerSelected && option !== answer ? 'wrong' : '',
        hide ? 'hide' : '' 
    ].filter(Boolean).join(' '); 

    return (
        <div className={optionClassName} onClick={() => selectOption(option)}> 
            <p>{option}</p>
        </div>
    );
} 

export default Option;