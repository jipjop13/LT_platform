import React, { Component } from 'react';
import '../stylesheets/NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg">
                    <span className="navbar-brand mb-0 h1">
                        <i className="fa fa-lg fa-clock-o" aria-hidden="true" />
                        &nbsp;LiveTiming Platform
                    </span>
                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navBarCollapsible"
                            aria-controls="navBarCollapsible"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="fa fa-lg fa-bars" aria-hidden="true" />
                    </button>
                    <div className="collapse navbar-collapse" id="navBarCollapsible">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#">
                                <i className="fa fa-lg fa-sign-in" aria-hidden="true" />
                                &nbsp;Login
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
