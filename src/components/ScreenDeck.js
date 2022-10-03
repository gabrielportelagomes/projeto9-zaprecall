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
import DECK2 from "../deck2.js"
import DECK3 from "../deck3.js"
import DECK4 from "../deck4.js"


export default function ScreenDeck({ logo, select}) {
    const decks = [DECK1, DECK2, DECK3, DECK4]
    const numberOfQuestions = decks[select].length
    const iconsCard = [seta_play, seta_virar, icone_erro, icone_quase, icone_certo]
    const initialArrayAnswerIcons = Array(numberOfQuestions).fill(null)
    const [arrayAnswerIcons, ] = useState(initialArrayAnswerIcons)
    const [numberOfAnswers, setNumberOfAnswers] = useState(0)
    const [footerOpen, setFooterOpen] = useState(false)
    
    return (
        <ScreenContainer>
            <Logo logo={logo} />
            <CardsContainer>
                {decks[select].map((d, index) => <Card
                    key={index}
                    question={d.Q}
                    answer={d.A}
                    index={index}
                    number={index + 1}
                    iconsCard={iconsCard}
                    setNumberOfAnswers={setNumberOfAnswers}
                    numberOfAnswers={numberOfAnswers}
                    arrayAnswerIcons={arrayAnswerIcons}
                    setFooterOpen={setFooterOpen}
                />)}
            </CardsContainer>
            <Footer
                numberOfQuestions={numberOfQuestions}
                numberOfAnswers={numberOfAnswers}
                arrayAnswerIcons={arrayAnswerIcons}
                footerOpen={footerOpen}
                
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