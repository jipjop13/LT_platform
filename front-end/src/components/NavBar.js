import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">LiveTiming Platform</span>
                </nav>
            </div>
        )
    }
}

export default NavBar;
