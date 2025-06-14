import React from 'react'

// * DEVTOOLS BBLOCKER 
// import DevToolsBlocker from "../HomeMain/MainAdds/DevToolsBlocker";

// * CONSOLE BLOCKER
// import ConsoleBlocker from "../HomeMain/MainAdds/ConsoleBlocker";
import "./App.css"
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
const App = () => {
  return (
    <div id='App'>
      {/* <DevToolsBlocker /> */}
      {/* <ConsoleBlocker /> */}
        <div id="All">
            <Header />
            <Main />  
            <Footer />
        </div>
    </div>
  )
}
export default App




      