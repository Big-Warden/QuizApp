import React from "react";
import Answer from "./Answer";

const renderAnswer = (props) => {
	console.log(props);
	//return <Answer {...props} />;
}

const Question = ({answer}) => (
	<div key={answer}>
		<h3>{answer}</h3>
	</div>
);

export default Question;