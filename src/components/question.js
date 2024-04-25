import React from 'react'

import PropTypes from 'prop-types'

import './question.css'

const Question = (props) => {
  return (
    <div className={`question-container ${props.rootClassName} `}>
      <span className="question-text heading3">{props.question}</span>
      <span className="bodySmall question-text1">{props.answer}</span>
    </div>
  )
}

Question.defaultProps = {
  rootClassName: '',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question.propTypes = {
  rootClassName: PropTypes.string,
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question
