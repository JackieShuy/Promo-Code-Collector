import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Adv from './Adv'
import AllCode from './AllCode'
import {Route} from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Route path='/' component={Header} />
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Adv} />
      <br /> 
      <Route path='/codes' component={AllCode}/>
      <Route path='/' component={Footer} />
    </React.Fragment>
  )
}

export default App
