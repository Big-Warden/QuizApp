import React, { PropTypes } from 'react'
import Answer from '../components/Answer'

const Quiz = ( {quiz, id, answerClick} ) => {
	return (
		<div className="game">
			<h3> { quiz.title } </h3>
			<p> { quiz.description } </p>
			<p>Current score: { quiz.score } </p>
			<h1> { quiz.questions[quiz.current].question } </h1> 
			{ quiz.questions[quiz.current].answers.map((answer, index) => (
				<div key={index} onClick={() => answerClick({answer: answer, id: id, correct: quiz.questions[quiz.current].correct })} className="answer"> <h3> {answer} </h3> </div>
			)) }
		</div>
	)
}

export default Quiz