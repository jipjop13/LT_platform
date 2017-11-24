import React, { Component } from 'react';
import china from "../assets/images/china.svg";
import australia from "../assets/images/australia.svg";
import '../stylesheets/components/Circuit.css'

class Circuit extends Component {

    render() {
        return (
            <div className="Circuit">
                <img src={australia} className="circuit" alt="circuit"/>
            </div>
        )
    }
}

export default Circuit;
