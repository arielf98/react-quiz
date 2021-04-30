import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'
import { fetchQuestions, Difficulty, QuestionState } from './API'

//styles
import { GlobalStyle, Wrapper } from './App.styles'

export type AnswerObject = {
  question : string 
  answer: string 
  correct: boolean
  correctAnswer: string 
}


const TOTAL_QUESTIONS = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuestions( TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestion(newQuestions)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value

      const correct = question[number].correct_answer === answer

      if(correct) setScore(prev => prev + 1) 

      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correctAnswer: question[number].correct_answer,
      }

      setUserAnswer(prev => [...prev, answerObject])
    }

  }

  const nextQuestion = () => {
    
    const nextQuestion = number + 1

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }



  return (

    <>
    <GlobalStyle/>
    <Wrapper>
     <h1>REACT QUIZ</h1>
     {
        gameOver || userAnswer.length === TOTAL_QUESTIONS ? 
        (<button className="start" onClick={startTrivia}> Start </button>) : null
     }
     
     {!gameOver ? <p className="score"> Score: {score} </p> : null}
     {loading && <p> Loading Question ... </p> }

      {!loading && !gameOver && (
      <QuestionCard
        questingNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      />
      )}

      {
        !loading && !gameOver && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? 
          (<button className="next" onClick={nextQuestion}> Next Question </button>) : null
      }
     
    </Wrapper>
    </>

  );
}

export default App;
