import { useState } from "react"
import styled from "styled-components"

export default function Footer({ numberOfQuestions, numberOfAnswers }) {
        return (
        <FooterContainer>
            <p data-identifier="flashcard-counter">{numberOfAnswers}/{numberOfQuestions} CONCLUÍDOS</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
        width: 100%;
        min-height: 50px;
        height: 120px;
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