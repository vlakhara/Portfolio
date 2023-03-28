import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <div
        id="Projects"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Projects
      </div>
      <div
        id="Experience"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About
      </div>
      <div
        id="Connect"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Connect
      </div>
    </div>
  )
}

export default App
