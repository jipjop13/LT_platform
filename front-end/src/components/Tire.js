import React, { Component } from 'react';
import '../stylesheets/Tire.css'

class Tire extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let classes = "tire " + this.props.type;
        return (
            <div className="Tire">
                <div className={classes} />
            </div>
        );
    }
}

export default Tire;
