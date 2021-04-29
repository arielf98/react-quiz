import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'


const TOTAL_QUESTION = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }



  return (
    <div className="App">
     <h1>REACT QUIZ</h1>
     <button className="start" onClick={startTrivia}> Start </button>
     <p className="score"> Score: </p>
     <p> Loading Question ... </p>
     <QuestionCard
      questingNr={number + 1}
      totalQuestions={TOTAL_QUESTION}
      question={question[number].question}
      answers={question[number].answer}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
     />
     <button className="next" onClick={nextQuestion}> Next Question </button>
    </div>

  );
}

export default App;
