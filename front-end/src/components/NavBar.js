import React, { Component } from 'react';
import '../stylesheets/NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar shadow">
                    <span className="navbar-brand mb-0 h1">
                        <i className="fa fa-lg fa-clock-o" aria-hidden="true" />
                        &nbsp;LiveTiming Platform
                    </span>
                </nav>
            </div>
        )
    }
}

export default NavBar;
