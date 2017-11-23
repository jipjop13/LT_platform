import React, { Component } from 'react';

class Icon extends Component {

    render() {
        let isLarge = this.props.large ? " fa-lg " : " ";
        let classes = "fa fa-" + this.props.icon + isLarge + this.props.color;
        let text = this.props.text ? (" " + this.props.text) : null;
        return (
            <span className="Icon">
                <i className={classes} aria-hidden="true" />
                {text}
            </span>
        );
    }
}

export default Icon;
