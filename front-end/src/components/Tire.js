import React, { Component } from 'react';
import '../stylesheets/Tires.css'
import Icon from "./Icon";

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
        let color = Tire.TYPES[type];
        let label = Tire.TYPES_LABELS[type];
        return (
            <div className="Tire"
                 data-toggle="tooltip"
                 data-placement="left"
                 title={label} >
                <Icon icon="circle-o-notch" color={color} />
            </div>
        );
    }
}

export default Tire;
