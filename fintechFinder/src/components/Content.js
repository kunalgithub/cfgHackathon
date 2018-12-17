import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import About from './About'
import Search from './Search'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/search" component={Search} />
    </Switch>
  )
}

export default Content
