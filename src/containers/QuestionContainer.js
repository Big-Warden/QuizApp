import React, { Component } from "react";
import { Link } from "react-router-dom";

import Answer from "../components/Answer";

class QuestionContainer extends Component {
	constructor(props) {
		super(props);
		this.renderAnswer = this.renderAnswer.bind(this);
		this.onAnswerClick = this.onAnswerClick.bind(this);
		//console.log(props);
	}

	renderAnswer(answer) {
		return <Answer key={answer} answer={answer} onAnswerClick={this.onAnswerClick} />;
	}

	onAnswerClick(answer) {
		const correctAnswer = this.props.questions[this.props.current].correct;
		if(answer === correctAnswer) {
			this.props.updateScore(1);
		} else {
			this.props.updateScore(0);
		}
	}

	render() {
		let currentQuestion = this.props.questions[this.props.current];
		return (
			<div>
				<h1>{currentQuestion.question} </h1>
				{ currentQuestion.answers.map(this.renderAnswer) }
			</div>
		);
	}

}



export default QuestionContainer