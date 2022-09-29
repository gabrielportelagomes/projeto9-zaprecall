import { useState } from "react"
import styled, { css } from "styled-components"

export default function Card({ question, answer, index, number, iconsCard, currentCard, setCurrentCard, arrayForgotIt, arrayAlmostForget, arrayZap, arrayAnswered}) {
  const [cardText, setCardText] = useState("Pergunta " + number)
  const [icon, setIcon] = useState(iconsCard[0])
  const [open, setOpen] = useState(false)
  const initialCardText = ("Pergunta " + number)

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
    <CardStyle open={open} icon={icon} includesCard={arrayAnswered.includes(index)} includesForgotIt={arrayForgotIt.includes(index)} includesAlmostForget={arrayAlmostForget.includes(index)} includesZap={arrayZap.includes(index)}>
      <p>{arrayAnswered.includes(index) ? initialCardText : cardText}</p>
      <img src={arrayForgotIt.includes(index) ? iconsCard[2] : arrayAlmostForget.includes(index) ? iconsCard[3] : arrayZap.includes(index) ? iconsCard[4] : icon} alt="play button" onClick={() => play(index)} />
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
            if(props.includesForgotIt === true) {
              return "#FF3030"
            } else if(props.includesAlmostForget === true) {
              return "#FF922E"
            } else if(props.includesZap) {
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
