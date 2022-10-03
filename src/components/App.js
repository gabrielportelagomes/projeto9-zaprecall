import { useState } from "react"
import GlobalStyle from "../assets/css/GlobalStyle.js"
import ScreenDeck from "./ScreenDeck.js"
import ScreenHome from "./ScreenHome.js"
import logo from "../assets/img/logo.png"


function App() {
  const [deckIndex, setDeckIndex] = useState("")
  const [start, setStart] = useState(false)
  const [goal, setGoal] = useState(null)
  
  return (
    <>
      <GlobalStyle />
      {start === false ? <ScreenHome logo={logo} deckIndex={deckIndex} setDeckIndex={setDeckIndex} setStart={setStart} setGoal={setGoal} goal={goal}/> : <ScreenDeck logo={logo} deckIndex={deckIndex} goal={goal}/> }
    </>
  )
}

export default App