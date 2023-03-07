import React,{useState} from 'react'
import css from './QuizBanner.module.css'
import Card from '../Card/Card'
import data from '../../../Data/data.json'
import StartButton from '../Button/StartButton'
function QuizBanner() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [scoreDisplay, setScoreDisplay] = useState(false)
  const [viewChoices, setViewChoices] = useState(true)
  const countSetter = ()=>{
    setCount(count+1)
    setViewChoices(true)
  }
  const scoreSetter = ()=>{
    setScore(score+1)
  }
  const displayScore = ()=>{
    setScoreDisplay(true)
  }
  const reset = ()=>{
    setCount(0);
    setScore(0);
    setScoreDisplay(false);
    setViewChoices(false);
  }
  return (
    <div className={css.ctn}>
        <div className={css.main}>
          {Object.keys(data).map((item)=><Card key={item} reset={viewChoices} scoreSetter={scoreSetter} countSetter={countSetter} question={item} answer={data[item]}/>)}
        </div>
        <div className={css.footer}>
          {scoreDisplay && <div className={css.result}>You have answered {score}/5 Correctly</div> }
          {!scoreDisplay && (count===5) && <button onClick={displayScore} className={css.btn}>Show Results</button>}
          {scoreDisplay && <StartButton func={reset}/>}
        </div>
    </div>
  )
}

export default QuizBanner