import React from 'react'

const Answer = ({answer, onAnswerClick}) => (
  <div key={answer} className="answer" onClick={() => onAnswerClick(answer)}>
    <p>{answer}</p>
  </div>
)

export default Answer