import { useState } from "react"
import GlobalStyle from "../assets/css/GlobalStyle.js"
import ScreenDeck from "./ScreenDeck.js"
import ScreenHome from "./ScreenHome.js"
import logo from "../assets/img/logo.png"


function App() {
  const [start, setStart] = useState(/* false */true)
  return (
    <>
      <GlobalStyle />
      {start === false ? <ScreenHome logo={logo} setStart={setStart} /> : <ScreenDeck logo={logo} /> }
    </>
  )
}

export default App