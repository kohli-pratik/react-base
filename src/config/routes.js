import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TestScreen from '../screens/TestScreen';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={TestScreen} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
