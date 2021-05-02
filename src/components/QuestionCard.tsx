
import React from 'react'


//styles 
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

// types
import { AnswerObject } from '../App'
type Props = {
    question : string
    answers : string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questingNr : number
    totalQuestions: number
}


const QuestionCard : React.FC<Props> = ({question, answers, callback, userAnswer, questingNr, totalQuestions}) => (
    <Wrapper> 
        <p className="number"> Question : {questingNr} / {totalQuestions} </p>
        <p dangerouslySetInnerHTML={{__html: question}} ></p>
        <div>
            {
                answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))
            }

        </div>
    </Wrapper>
    )


export default QuestionCard