import React, { Component } from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import {Entity, Scene} from 'aframe-react'

import './App.css'

class App extends Component {
  render () {
    return (
      <Scene>
        <Entity primitive='a-sky' src='wero.jpg' rotation='0 -240 0' />
      </Scene>
    )
  }
}

export default App
