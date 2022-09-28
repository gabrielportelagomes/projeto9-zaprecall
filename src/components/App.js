/* import { useState } from "react" */
import GlobalStyle from "../assets/css/GlobalStyle.js"
import styled from "styled-components"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import logo from "../assets/img/logo.png"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"

function App() {
  const deck = [
    { Q: "O que é JSX?", A: "Uma extensão de linguagem do JavaScript" },
    {
      Q: "O React é __",
      A: "uma biblioteca JavaScript para construção de interfaces"
    },
    { Q: "Componentes devem iniciar com __", A: "letra maiúscula" },
    { Q: "Podemos colocar __ dentro do JSX", A: "expressões" },
    {
      Q: "O ReactDOM nos ajuda __",
      A: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      Q: "Usamos o npm para __",
      A: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      Q: "Usamos props para __",
      A: "passar diferentes informações para componentes"
    },
    {
      Q: "Usamos estado (state) para __",
      A:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <LogoContainer>
          <img src={logo} alt="ZapRecall logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <CardsContainer>
          {deck.map((d, index) => <Card key={index} question={d.Q} answer={d.A} index={index + 1}/>)}
        </CardsContainer>
        <Footer>
          <ButtonsContainer>
            <button>Não<br/>lembrei</button>
            <button>Quase não<br/>lembrei</button>
            <button>Zap</button>
          </ButtonsContainer>
          <p>0/4 CONCLUÍDOS</p>
        </Footer>
      </ScreenContainer>
    </>
  )

  function Card({index}) {
    return (
      <CardStyle>
        <p>{"Pergunta " + index}</p>
        <img src={seta_play} alt="play button"/>
      </CardStyle>
    )
  }
}

export default App

const ScreenContainer = styled.div`
        background-color: #fb6b6b;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px;
        padding: 0px;
        padding-bottom: 200px;
        `
const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        margin: 40px 0 20px 0;
        img {
          width: 52px;
        }
        h1 {
          font-family: "Righteous";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 45px;
          color: #ffffff;
          margin-left: 20px;
        }
        `
const CardsContainer = styled.div`
        max-height: 400px;
        overflow-y: auto;
        margin-top: 26px;
        &::-webkit-scrollbar {
          display: none;
  }
        `
const CardStyle = styled.div`
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
        `
const Footer = styled.div`
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
          border: 1px solid blue;
          padding: 5px;
          &:nth-child(n + 1) {
            background-color: #FF3030;
          }
          &:nth-child(n + 2) {
            background-color: #FF922E;
          }
          &:nth-child(n + 3) {
            background-color: #2FBE34;
          }
        }
        `