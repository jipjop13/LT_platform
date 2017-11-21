import React, { Component } from 'react';
import '../stylesheets/Tire.css'

const $ = window.$;

class Tire extends Component {

    static TYPES = ["i", "us", "ss", "s", "h", "m", "w"];
    static TYPES_LABELS = ["Intermediate", "Ultra soft", "Super soft", "Soft", "Hard", "Medium", "Wet"];

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    render() {
        let tire = Tire.TYPES[this.props.type];
        let tireLabel = Tire.TYPES_LABELS[this.props.type];
        return (
            <div className="Tire">
                <div className={"tire " + tire} data-toggle="tooltip" data-placement="top" title={tireLabel} />
            </div>
        );
    }
}

export default Tire;
