import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// imort components
import AuthenticatedComponent from './AuthenticatedComponent'
import Home from './Home'
import Login from './Login'
import Register from './Register';
import Nav from './Nav'
import Protected from './Protected'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/" exact component={Home} />
        <AuthenticatedComponent>
          <Route path="/Protected" exact component={Protected} />
        </AuthenticatedComponent>
      </Switch>
    </Router>
  )
}

export default App
