import React, { useState } from 'react'
import ChoiceButton from '../Button/ChoiceButton'
import css from './Card.module.css'
import correctAnswer from '../../../Data/answer.json'

function Card(props) {
  const [clicked, setClicked] = useState(false)
  const clickSetter = ()=>{
    setClicked(true)
  }
  const choiceSetter = (choice)=>{
    if(choice===correctAnswer[props.question]){
      props.scoreSetter();
    }
  }
  if(!props.reset&&clicked){
    setClicked(false);
  }
  return (
    <div className={css.ctn}>
        <div className={css.question}>{props.question}</div>
        <div className={css.choiceCtn}>
           { 
            props.answer.map((ans)=><ChoiceButton disable={props.reset&&clicked} key={ans} val={ans} clickSetter={clickSetter} countSetter={props.countSetter} choiceSetter={choiceSetter}/>)
           } 
        </div>
    </div>
  )
}

export default Card