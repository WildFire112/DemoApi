import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
// imort components
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
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

export default connect(null, null)(App)
