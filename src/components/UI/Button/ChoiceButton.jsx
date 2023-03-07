import React from 'react'
import css from './ChoiceButton.module.css'
function ChoiceButton(props) {
    const clickFunc = (e)=>{
        props.clickSetter();
        props.countSetter();
        props.choiceSetter(e.target.innerText);
    }
  return (
    <>
        {props.disable && <button disabled className={css.btn}>{props.val}</button> }
        {!props.disable && <button onClick={clickFunc} className={css.btn}>{props.val}</button> }
    </>
  )
}

export default ChoiceButton