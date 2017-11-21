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
                <i className={"fa fa-circle-o-notch " + tire}
                   data-toggle="tooltip"
                   data-placement="left"
                   title={tireLabel}
                   aria-hidden="true" />
            </div>
        );
    }
}

export default Tire;
