import styled from "styled-components"

export default function Footer({ numberOfQuestions, numberOfAnswers, arrayAnswerIcons, footerOpen, result }) {
    return (
        <FooterContainer footerOpen={footerOpen}>
            <p data-identifier="flashcard-counter">{numberOfAnswers}/{numberOfQuestions} CONCLUÍDOS</p>
            <div>
                {arrayAnswerIcons.map((a, index) => <AnswerIcons src={a} key={index} alt="icon" />)}
            </div>
            <Result goalResult={result[0]}>
                <p>{result[0]}</p>
                <img src={result[1]} alt="Icon"/>
            </Result>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
        width: 100%;
        min-height: ${(props) => props.footerOpen ? "126px" : "70px"};
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
        font-family: "Recursive";
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        padding: 10px;
        margin-bottom: 6px
        }`

const AnswerIcons = styled.img`
        margin-left: 2.5px;
        margin-right: 2.5px;
        display: ${props => props.src === null ? "none" : "inicial"};
    `

const Result = styled.div`
        display: ${props => props.goalResult === null ? "none" : "flex"};
        align-items: center;
        img {
            width: 23px;
            height: 23px;
        }
        p {
            margin: 0;
        }
    `