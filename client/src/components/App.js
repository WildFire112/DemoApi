import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// imort components
import AuthenticatedComponent from './AuthenticatedComponent'
import Home from './Home'
import Nav from './Nav'
//import Protected from './Protected'

// eslint-disable-next-line
import style from '../styles/App.css'

function App() {
    return (
        <Router >
            <Nav />
            <div className="app">
                <Switch>
                    {/* <Route path="/Login" exact component={Login} />
                    <Route path="/Register" exact component={Register} /> */}
                    <AuthenticatedComponent >
                        {/* <Route path="/Protected" exact component={Protected} /> */}
                        <Route path="/" exact component={Home} />
                    </AuthenticatedComponent>
                </Switch>
            </div>
        </Router>
    )
}

export default App
