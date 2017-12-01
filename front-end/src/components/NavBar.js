import React, { Component } from 'react';
import Icon from "./Icon";
import '../stylesheets/components/NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg">
                    <span className="navbar-brand mb-0 h1">
                        <Icon icon="clock-o" text="LiveTiming Platform" isLarge={true} />
                    </span>
                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navBarCollapsible"
                            aria-controls="navBarCollapsible"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <Icon icon="bars" isLarge={true} />
                    </button>
                    <div className="collapse navbar-collapse" id="navBarCollapsible">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#">
                                <Icon icon="sign-in" text="Login" isLarge={true} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
