import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NotFound from "./containers/NotFound";
import LiveData from "./containers/LiveData";
import './stylesheets/App.css';

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={LiveData} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
