
import React from 'react'

type Props = {
    question : string
    answers : string[]
    callback : any
    userAnswer: any
    questingNr : number
    totalQuestions: number
}


const QuestionCard : React.FC<Props> = ({question, answers, callback, userAnswer, questingNr, totalQuestions}) => (
    <div> 
        <p className="number"> Question : {questingNr} / {totalQuestions} </p>
        <p dangerouslySetInnerHTML={{__html: question}} ></p>
        <div>
            {answers.map(answer => {
                <div>
                    <button disabled={userAnswer} onClick={callback}> 
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </div>
            })}
        </div>
    </div>
    )


export default QuestionCard