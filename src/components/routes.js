import React, { Component } from 'react'
import Home from './home/home';
import Profile from './profile/profile';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
            </Router>
        )
    }
}
