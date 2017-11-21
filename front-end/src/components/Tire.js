import React, { Component } from 'react';
import '../stylesheets/Tire.css'

const $ = window.$;

class Tire extends Component {

    static TYPES = ["us", "ss", "s", "m", "h", "i", "w"];
    static TYPES_LABELS = ["Ultra soft", "Super soft", "Soft", "Medium", "Hard", "Intermediate", "Wet"];

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    render() {
        let type = this.props.type;
        let tire = Tire.TYPES[type];
        let tireLabel = Tire.TYPES_LABELS[type];
        return (
            <div className="Tire">
                <div className={"tire " + tire} data-toggle="tooltip" data-placement="left" title={tireLabel} />
            </div>
        );
    }
}

export default Tire;
