import React, { Component } from 'react';
import '../stylesheets/NavBar.css';
import Icon from "./Icon";

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg">
                    <span className="navbar-brand mb-0 h1">
                        <Icon icon="clock-o" text="LiveTiming Platform" large={true} />
                    </span>
                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navBarCollapsible"
                            aria-controls="navBarCollapsible"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <Icon icon="bars" large={true} />
                    </button>
                    <div className="collapse navbar-collapse" id="navBarCollapsible">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#">
                                <b><Icon icon="sign-in" text="Login" large={true} /></b>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
