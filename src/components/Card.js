import { useState } from "react"
import styled, { css } from "styled-components"

export default function Card({ question, answer, index, number, iconsCard, setNumberOfAnswers, numberOfAnswers, arrayAnswerIcons, setFooterOpen }) {
  const [cardText, setCardText] = useState("Pergunta " + number)
  const [icon, setIcon] = useState(iconsCard[0])
  const [open, setOpen] = useState(false)
  const [arrayForgotIt, setArrayForgotIt] = useState([])
  const [arrayAlmostForgot, setArrayAlmostForgot] = useState([])
  const [arrayZap, setArrayZap] = useState([])
  const [currentCard, setCurrentCard] = useState()
  const [arrayAnswered, setArrayAnswered] = useState([])
  const initialCardText = ("Pergunta " + number)

  function forgotIt(index) {
    if (currentCard !== undefined) {
      const newArrayAnswered = [...arrayAnswered, currentCard]
      setArrayAnswered(newArrayAnswered)
      const newArrayForgotIt = [...arrayForgotIt, currentCard]
      setArrayForgotIt(newArrayForgotIt)
      const newNumberOfAnswers = numberOfAnswers + 1
      setNumberOfAnswers(newNumberOfAnswers)
      setCurrentCard()
      setIcon()
      arrayAnswerIcons[index] = iconsCard[2]
      setFooterOpen(true)
    } else {
      alert("Selecione um cartão e chegue na resposta")
    }
  }

  function almostForgot(index) {
    if (currentCard !== undefined) {
      const newArrayAnswered = [...arrayAnswered, currentCard]
      setArrayAnswered(newArrayAnswered)
      const newArrayAlmostForgot = [...arrayAlmostForgot, currentCard]
      setArrayAlmostForgot(newArrayAlmostForgot)
      const newNumberOfAnswers = numberOfAnswers + 1
      setNumberOfAnswers(newNumberOfAnswers)
      setCurrentCard()
      setIcon()
      arrayAnswerIcons[index] = iconsCard[3]
      setFooterOpen(true)
    } else {
      alert("Selecione um cartão e chegue na resposta")
    }
  }

  function zap(index) {
    if (currentCard !== undefined) {
      const newArrayAnswered = [...arrayAnswered, currentCard]
      setArrayAnswered(newArrayAnswered)
      const newArrayZap = [...arrayZap, currentCard]
      setArrayZap(newArrayZap)
      const newNumberOfAnswers = numberOfAnswers + 1
      setNumberOfAnswers(newNumberOfAnswers)
      setCurrentCard()
      setIcon()
      arrayAnswerIcons[index] = iconsCard[4]
      setFooterOpen(true)
    } else {
      alert("Selecione um cartão e chegue na resposta")
    }
  }

  function play(index) {
    if (currentCard === undefined) {
      if (icon === iconsCard[0]) {
        setIcon(iconsCard[1])
        setCardText(question)
        setOpen(true)
      }
    }
    if (icon === iconsCard[1]) {
      setIcon(null)
      setCardText(answer)
      setCurrentCard(index)
    }
  }

  return (
    <CardStyle data-identifier="flashcard" open={open} icon={icon} includesCard={arrayAnswered.includes(index)} includesForgotIt={arrayForgotIt.includes(index)} includesAlmostForgot={arrayAlmostForgot.includes(index)} includesZap={arrayZap.includes(index)}>
      <p data-identifier={arrayAnswered.includes(index) ? "flashcard-index-item" : cardText === question ? "flashcard-question" : cardText === answer ? "flashcard-answer" : "flashcard-index-item"}>{arrayAnswered.includes(index) ? initialCardText : cardText}</p>
      <img data-identifier={icon === iconsCard[0] ? "flashcard-show-btn" : icon === iconsCard[1] ? "flashcard-turn-btn" : "flashcard-status"} src={arrayForgotIt.includes(index) ? iconsCard[2] : arrayAlmostForgot.includes(index) ? iconsCard[3] : arrayZap.includes(index) ? iconsCard[4] : icon} alt="icon" onClick={() => play(index)} />
      <ButtonsContainer cursorPointer={currentCard !== undefined} display={icon === null ? "flex" : "none"}>
        <button data-identifier="forgot-btn" onClick={() => forgotIt(index)}>Não<br />lembrei</button>
        <button data-identifier="almost-forgot-btn" onClick={() => almostForgot(index)}>Quase não<br />lembrei</button>
        <button data-identifier="zap-btn" onClick={() => zap(index)}>Zap</button>
      </ButtonsContainer>
    </CardStyle>
  )
}

const CardStyle = styled.div`
        ${props => props.open === false && css`
        width: 300px;
        height: 65px;
        background-color: #ffffff;
        margin: 25px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-family: "Recursive";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #333333;
        }
        img {
          cursor: pointer;
        }`
  }
      ${props => props.open === true && css`
      width: 300px;
      margin: 25px;
      padding: 15px;
      min-height: 100px;
      background: #FFFFD5;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
        p {
          font-family: "Recursive";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #333333;
        }
        img{
          position: absolute;
          bottom: 10px;
          right: 10px;
          cursor: pointer;
          display:  ${props => props.icon === null ? "none" : "inicial"}
        }`
  }
       ${props => props.includesCard === true && css`
        width: 300px;
        min-height: 65px;
        background-color: #ffffff;
        margin: 25px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        p {
          font-family: "Recursive";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          text-decoration: line-through;
          color: ${(props) => {
      if (props.includesForgotIt === true) {
        return "#FF3030"
      } else if (props.includesAlmostForgot === true) {
        return "#FF922E"
      } else if (props.includesZap) {
        return "#2FBE34"
      }
    }};
        }
        img {
          position: initial;
          display: initial;
          cursor: initial
        }`
  }`

const ButtonsContainer = styled.div`
        display: ${props => props.display};
        width: 100%;
        justify-content: space-between;
        margin-top: 26px;
        button {
          width: 85px;
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
          cursor: ${props => props.cursorPointer ? "pointer" : "initial"};
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