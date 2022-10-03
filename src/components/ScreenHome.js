import styled from "styled-components"

export default function ScreenHome({ logo, setStart, select, setSelect, DECK1 }) {
    function startRecall() {
        if (select !== "") {
            setStart(true)
            alert(select)
        }
    }

    return (
        <ScreenContainer select={select}>
            <img src={logo} alt="Zap logo" />
            <h1>ZapRecall</h1>
            <div>
                <select value={select} onChange={selected => setSelect(selected.target.value)}>
                    <option value="">Escolha seu deck</option>
                    <option value="0">Deck 1</option>
                    <option value="1">Deck 2</option>
                    <option value="2">Deck 3</option>
                    <option value="3">Deck 4</option>
                </select>
            </div>
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
        }
        button {
            width: 246px;
            height: 54px;
            background-color: ${props => props.select === "" ? "#E8E8E8" : "#ffffff"};
            border-radius: 5px;
            border: ${props => props.select === "" ? "none" : "1px solid #D70900"};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            color: ${props => props.select === "" ? "#C0C0C0" : "#D70900"};
            font-family: Recursive;
            font-weight: 400;
            font-size: 18px;
            cursor: ${props => props.select === "" ? "initial" : "pointer"};
        }
        `