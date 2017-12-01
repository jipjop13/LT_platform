import React, { Component } from 'react';
import '../stylesheets/Tires.css'
import Icon from "./Icon";

const types = ["us", "ss", "s", "m", "h", "i", "w"];
const labels = ["Ultra soft", "Super soft", "Soft", "Medium", "Hard", "Intermediate", "Wet"];

class Tire extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            label: null
        }
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateState(props);
    }

    updateState(props) {
        let color = types[props.type];
        let label = labels[props.type];

        this.setState({
            color: color,
            label: label
        })
    }

    render() {
        return (
            <div className="Tire">
                <Icon icon="circle-o-notch" color={this.state.color} tooltip={this.state.label} />
            </div>
        );
    }
}

export default Tire;
