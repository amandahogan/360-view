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
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
        <Entity particle-system={{preset: 'snow'}} />
        <Entity light={{type: 'point'}} />
        <Entity text={{value: 'Hello, WebVR!'}} />
      </Scene>
    )
  }
}

export default App
