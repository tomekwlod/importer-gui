import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Routing from './Routing'

class App extends Component {
    render() {
        return (
            <Router>
                <Routing />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))