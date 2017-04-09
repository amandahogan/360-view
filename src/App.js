import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <a-scene>
        <a-sky src='wero.jpg' rotation='0 -240 0'></a-sky>
      </a-scene>
    )
  }
}

export default App
