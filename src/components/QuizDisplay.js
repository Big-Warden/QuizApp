import React from "react";
import { Link } from "react-router-dom";

const QuizDisplay = ({ quizzes }) => {
	return (
		<div>
			{ 
				quizzes.map((quiz, index) => (
					<div key={index} className="gamedisplay">
						<Link to={"/quiz/" + index}>
							<h1>{quiz.title}</h1>
							<h5>Your score: {quiz.score}</h5>
							<p>{quiz.description}</p>
						</Link>
					</div>
					)
				)
			}
		</div>
	)
}
 
export default QuizDisplay;



