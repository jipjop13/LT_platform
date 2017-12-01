import React, { Component } from 'react';
import Icon from "./Icon";
import '../stylesheets/components/Card.css';

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: null,
            title: null,
            text: null,
            bgColor: null,
            txtColor: null
        }
    }

    componentWillMount() {
        this.updateState(this.props)
    }

    componentWillReceiveProps(props) {
        this.updateState(props)
    }

    updateState(props) {
        this.setState({
            icon: props.icon,
            title: props.title,
            text: props.text,
            bgColor: props.bgColor,
            txtColor: props.txtColor
        })
    }

    render() {
        let classes = "card " + this.state.bgColor + " " + this.state.txtColor;
        return (
            <div className="Card">
                <div className={classes}>
                    <div className="card-body">
                        <h6 className="card-title">
                            <Icon icon={this.state.icon} text={this.state.title} />
                        </h6>
                        <p className="card-text">{this.state.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
