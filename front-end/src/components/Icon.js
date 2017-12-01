import React, { Component } from 'react';

const $ = window.$;

class Icon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: null,
            color: null,
            isLarge: null,
            text: null,
            tooltip: null,
        }
    }

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    componentWillMount() {
        this.updateState(this.props)
    }

    componentWillReceiveProps(props) {
        this.updateState(props)
    }

    updateState(props) {
        let isLarge = props.isLarge ? " fa-lg " : " ";
        let text = props.text ? (" " + props.text) : "";

        this.setState({
            icon: props.icon,
            color: props.color,
            isLarge: isLarge,
            text: text,
            tooltip: props.tooltip,
        })
    }

    render() {
        let classes = "fa fa-" + this.state.icon + this.state.isLarge + this.state.color;
        return (
            <span className="Icon">
                <i className={classes}
                   data-toggle="tooltip"
                   data-placement="left"
                   title={this.state.tooltip}
                   aria-hidden="true" />
                {this.state.text}
            </span>
        );
    }
}

export default Icon;
