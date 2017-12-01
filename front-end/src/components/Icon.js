import React, { Component } from 'react';

const $ = window.$;

class Icon extends Component {

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    render() {
        let isLarge = this.props.large ? " fa-lg " : " ";
        let classes = "fa fa-" + this.props.icon + isLarge + this.props.color;
        let text = this.props.text ? (" " + this.props.text) : null;
        let tooltip = this.props.tooltip;
        return (
            <span className="Icon">
                <i className={classes}
                   data-toggle="tooltip"
                   data-placement="left"
                   title={tooltip}
                   aria-hidden="true" />
                {text}
            </span>
        );
    }
}

export default Icon;
