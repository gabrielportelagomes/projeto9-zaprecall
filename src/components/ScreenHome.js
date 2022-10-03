import styled from "styled-components"

export default function ScreenHome({ logo, deckIndex, setDeckIndex, setStart, setGoal, goal }) {
    function deck() {
        if (deckIndex !== "" && goal >= 1) {
            setStart(true)
        }
    }

    return (
        <ScreenContainer deckIndex={deckIndex} goal={goal}>
            <img src={logo} alt="Zap logo" />
            <h1>ZapRecall</h1>
            <div>
                <select value={deckIndex} onChange={selected => setDeckIndex(selected.target.value)}>
                    <option value="">Escolha seu deck</option>
                    <option value="0">Deck 1</option>
                    <option value="1">Deck 2</option>
                    <option value="2">Deck 3</option>
                    <option value="3">Deck 4</option>
                </select>
            </div>
            <input placeholder="Digite sua meta de zaps..." onChange={e => setGoal(e.target.value)}></input>
            <button data-identifier="start-btn" onClick={() => deck()}>Iniciar Recall!</button>
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
          margin-bottom: 25px;
        }
        select {
            width: 246px;
            height: 43px;
            background-color: #ffffff;
            border-radius: 5px;
            border: none;
            margin-bottom: 18px;
            cursor: pointer;
            color: ${props => props.deckIndex === "" ? "#ADADAD" : "#000000"};
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
        }
        input {
            width: 246px;
            height: 43px;
            background-color: #ffffff;
            border-radius: 5px;
            border: none;
            margin-bottom: 18px;
            cursor: pointer;
            color: ${props => props.goal === null ? "#ADADAD" : "#000000"};
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
        }
        button {
            width: 246px;
            height: 54px;
            background-color: ${props => (props.deckIndex === "" || props.goal === null || props.goal < 1) ? "#E8E8E8" : "#ffffff"};
            border-radius: 5px;
            border: ${props => (props.deckIndex === "" || props.goal === null || props.goal < 1) ? "none" : "1px solid #D70900"};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            color: ${props => (props.deckIndex === "" || props.goal === null || props.goal < 1) ? "#C0C0C0" : "#D70900"};
            font-family: Recursive;
            font-weight: 400;
            font-size: 18px;
            cursor: ${props => (props.deckIndex === "" || props.goal === null || props.goal < 1) ? "initial" : "pointer"};
        }`