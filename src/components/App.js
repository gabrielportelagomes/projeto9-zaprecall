import { useState } from "react"
import GlobalStyle from "../assets/css/GlobalStyle.js"
import ScreenDeck from "./ScreenDeck.js"
import ScreenHome from "./ScreenHome.js"
import logo from "../assets/img/logo.png"


function App() {
  const [start, setStart] = useState(false)
  const [select, setSelect] = useState("")
  return (
    <>
      <GlobalStyle />
      {start === false ? <ScreenHome logo={logo} setStart={setStart} select={select} setSelect={setSelect}/> : <ScreenDeck logo={logo} select={select}/> }
    </>
  )
}

export default App