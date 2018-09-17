import React from 'react'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'



import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/projects' component={Projects}/>
    </Switch>  
)

export default Main