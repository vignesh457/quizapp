import React,{useState} from 'react'
import StartButton from '../Button/StartButton'
import QuizBanner from './QuizBanner'
import css from './Banner.module.css'

function Banner() {
    const [status, setStatus] = useState("home")
    const setQuiz = ()=>{setStatus("quiz")};
  return (
    <div className={css.ctn}>
        <div className={css.title}><h1>Quizz App</h1></div>
        <div className={css.main}>
          {(status==="home") && <StartButton func={setQuiz}/>}
          {(status==="quiz") && <QuizBanner/>}
        </div>
    </div>
  )
}

export default Banner