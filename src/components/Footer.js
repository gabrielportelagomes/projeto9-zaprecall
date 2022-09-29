import { useState } from "react"
import styled from "styled-components"

export default function Footer({ numberOfQuestions, arrayForgotIt, setArrayForgotIt, arrayAlmostForget, setArrayAlmostForget, arrayZap, setArrayZap, currentCard, setCurrentCard, arrayAnswered, setArrayAnswered }) {
    const [numberOfAnswers, setNumberOfAnswers] = useState(0)

    function forgotIt() {
        if (currentCard !== undefined) {
            const newArrayAnswered = [...arrayAnswered, currentCard]
            setArrayAnswered(newArrayAnswered)
            const newArrayForgotIt = [...arrayForgotIt, currentCard]
            setArrayForgotIt(newArrayForgotIt)
            const newNumberOfAnswers = numberOfAnswers + 1
            setNumberOfAnswers(newNumberOfAnswers)
            setCurrentCard()
        } else {
            alert("Selecione um cartão e chegue na resposta")
        }
    }

    function almostForget() {
        if (currentCard !== undefined) {
            const newArrayAnswered = [...arrayAnswered, currentCard]
            setArrayAnswered(newArrayAnswered)
            const newArrayAlmostForget = [...arrayAlmostForget, currentCard]
            setArrayAlmostForget(newArrayAlmostForget)
            const newNumberOfAnswers = numberOfAnswers + 1
            setNumberOfAnswers(newNumberOfAnswers)
            setCurrentCard()
        } else {
            alert("Selecione um cartão e chegue na resposta")
        }
    }

    function zap() {
        if (currentCard !== undefined) {
            const newArrayAnswered = [...arrayAnswered, currentCard]
            setArrayAnswered(newArrayAnswered)
            const newArrayZap = [...arrayZap, currentCard]
            setArrayZap(newArrayZap)
            const newNumberOfAnswers = numberOfAnswers + 1
            setNumberOfAnswers(newNumberOfAnswers)
            setCurrentCard()
        } else {
            alert("Selecione um cartão e chegue na resposta")
        }
    }

    return (
        <FooterContainer>
            <ButtonsContainer>
                <button onClick={() => forgotIt()}>Não<br />lembrei</button>
                <button onClick={() => almostForget()}>Quase não<br />lembrei</button>
                <button onClick={() => zap()}>Zap</button>
            </ButtonsContainer>
            <p>{numberOfAnswers}/{numberOfQuestions} CONCLUÍDOS</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
        width: 100%;
        min-height: 50px;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Recursive";
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        padding: 10px;
        `
const ButtonsContainer = styled.div`
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
        button {
          width: 90px;
          font-family: "Recursive";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #ffffff;
          background: blue;
          border-radius: 5px;
          padding: 5px;
          &:nth-child(n + 1) {
            background-color: #FF3030;
            border: 1px solid #FF3030;
          }
          &:nth-child(n + 2) {
            background-color: #FF922E;
            border: 1px solid #FF922E;
          }
          &:nth-child(n + 3) {
            background-color: #2FBE34;
            border: 1px solid #2FBE34;
          }
        }
        `
