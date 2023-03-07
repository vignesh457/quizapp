import React from 'react'
import css from './StartButton.module.css'
function StartButton(props) {
  return (
    <div className={css.ctn}>
      <button className={css.btn} onClick={props.func}>Start Quiz</button>
    </div>
  )
}

export default StartButton