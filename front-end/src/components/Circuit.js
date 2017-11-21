import React, { Component } from 'react';
import circuit from "../assets/images/china.svg";
import '../stylesheets/Circuit.css'

class Circuit extends Component {

    render() {
        return (
            <div className="Circuit">
                <img src={circuit} alt="circuit"/>
            </div>
        )
    }
}

export default Circuit;
