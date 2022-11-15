import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from "./components/Home"
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Option1 from './components/option1'
import Option2 from './components/option2'
import "./App.scss"


function App() {

  return (
    <div >
      <Route path="/" component={Navbar} />
      <div className="flex">
        <Route path="/" component={Sidebar} />
        <div className="content">
          <Route exact path="home" component={Home} />
          <Route exact path="option1" component={Option1} />
          <Route exact path="option2" component={Option2} />

        </div>
      </div>


      <Route exact path='/' component={Home} />
    </div>
  )
}

export default App
