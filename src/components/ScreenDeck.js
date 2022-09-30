import { useState } from "react"
import styled from "styled-components"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import Logo from "./Logo.js"
import Card from "./Card.js"
import Footer from "./Footer.js"
import DECK1 from "../deck1.js"


export default function ScreenDeck({logo}) {
    const numberOfQuestions = DECK1.length
    const [arrayForgotIt, setArrayForgotIt] = useState([])
    const [arrayAlmostForgot, setArrayAlmostForgot] = useState([])
    const [arrayZap, setArrayZap] = useState([])
    const [currentCard, setCurrentCard] = useState()
    const [arrayAnswered, setArrayAnswered] = useState([])

    const iconsCard = [seta_play, seta_virar, icone_erro, icone_quase, icone_certo]

    return (
        <ScreenContainer>
            <Logo logo={logo} />
            <CardsContainer>
                {DECK1.map((d, index) => <Card
                    key={index}
                    question={d.Q}
                    answer={d.A}
                    index={index}
                    number={index + 1}
                    iconsCard={iconsCard}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                    arrayForgotIt={arrayForgotIt}
                    arrayAlmostForgot={arrayAlmostForgot}
                    arrayZap={arrayZap}
                    arrayAnswered={arrayAnswered}
                />)}
            </CardsContainer>
            <Footer
                numberOfQuestions={numberOfQuestions}
                arrayForgotIt={arrayForgotIt}
                setArrayForgotIt={setArrayForgotIt}
                arrayAlmostForgot={arrayAlmostForgot}
                setArrayAlmostForgot={setArrayAlmostForgot}
                arrayZap={arrayZap}
                setArrayZap={setArrayZap}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                arrayAnswered={arrayAnswered}
                setArrayAnswered={setArrayAnswered}
            />
        </ScreenContainer>
    )
}

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

const CardsContainer = styled.div`
        overflow-y: auto;
        margin-top: 130px;
        &::-webkit-scrollbar {
          display: none;
  }
        `