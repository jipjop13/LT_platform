import React, { Component } from 'react';
import '../stylesheets/Tires.css'
import Icon from "./Icon";

const teams = [
    "ferrari",
    "mclaren",
    "red-bull",
    "renault",
    "sauber",
    "mercedes",
    "force-india",
    "williams",
    "toro-rosso",
    "",
    "",
    "haas",
];
const labels = [
    "Ferrari",
    "McLaren",
    "Red Bull",
    "Renault",
    "Sauber",
    "Mercedes",
    "Force India",
    "Williams",
    "Toro Rosso",
    "",
    "",
    "Haas",
];

class Team extends Component {

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
        let color = teams[props.team];
        let label = labels[props.team];

        this.setState({
            color: color,
            label: label
        })
    }

    render() {
        return (
            <div className="Team">
                <Icon icon="square" color={this.state.color} tooltip={this.state.label} />
            </div>
        );
    }
}

export default Team;
