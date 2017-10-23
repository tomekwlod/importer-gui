import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Route,
    Link
} from 'react-router-dom'

import Home from './Home'
import Expert from './Expert'

const Routing = () => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Home</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/expert">Expert</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>

                    <p className="navbar-text navbar-right">Proof of concept</p>
                </div>
            </div>
        </nav>

        <Route exact path="/" component={Home}/>
        <Route path="/expert" component={Expert}/>
    </div>
)


export default Routing;