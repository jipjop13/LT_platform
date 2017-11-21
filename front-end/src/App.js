import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NotFound from "./containers/NotFound";
import Stream from "./containers/Stream";
import './stylesheets/App.css';
import NavBar from "./components/NavBar";

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <div className="App">
                <NavBar />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Stream} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
