import React, { Component } from 'react';
import '../stylesheets/Tire.css'
import Icon from "./Icon";

const $ = window.$;
const tireTypes = ["us", "ss", "s", "m", "h", "i", "w"];
const tireTypesLabels = ["Ultra soft", "Super soft", "Soft", "Medium", "Hard", "Intermediate", "Wet"];

class Tire extends Component {

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    render() {
        let type = this.props.type;
        let color = tireTypes[type];
        let label = tireTypesLabels[type];
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
