import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./components/Home"
import { Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
    </div>
  )
}

export default App
