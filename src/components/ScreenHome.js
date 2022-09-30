import styled from "styled-components"

export default function ScreenHome({logo, setStart}) {
    function startRecall() {
        setStart(true)
    }

    return(
        <ScreenContainer>
            <img src={logo} alt="Zap logo"/>
            <h1>ZapRecall</h1>
            <button data-identifier="start-btn" onClick={() => startRecall()}>Iniciar Recall!</button>
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
        justify-content: center;
        margin: 0px;
        padding: 0px;
        padding-bottom: 200px;
        img {
          width: 136px;
          margin-bottom: 13px;
        }
        h1 {
          font-family: "Righteous";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 45px;
          color: #ffffff;
          margin-bottom: 30px;
        }
        button {
            width: 246px;
            height: 54px;
            background-color: #ffffff;
            border-radius: 5px;
            border: 1px solid #D70900;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            color: #D70900;
            font-family: Recursive;
            font-weight: 400;
            font-size: 18px;
            cursor: pointer;
        }
        `