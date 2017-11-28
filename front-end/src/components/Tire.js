import React, { Component } from 'react';
import '../stylesheets/Tire.css'
import Icon from "./Icon";

const $ = window.$;
const tireTypes = ["us", "ss", "s", "m", "h", "i", "w"];
const tireTypesLabels = ["Ultra soft", "Super soft", "Soft", "Medium", "Hard", "Intermediate", "Wet"];

class Tire extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            label: null
        }
    }

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateState(props);
    }

    updateState(props) {
        let color = tireTypes[props.type];
        let label = tireTypesLabels[props.type];

        this.setState({
            color: color,
            label: label
        })
    }

    render() {
        return (
            <div className="Tire"
                 data-toggle="tooltip"
                 data-placement="left"
                 title={this.state.label} >
                <Icon icon="circle-o-notch" color={this.state.color} />
            </div>
        );
    }
}

export default Tire;
