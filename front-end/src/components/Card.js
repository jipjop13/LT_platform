import React, { Component } from 'react';
import Icon from "./Icon";
import '../stylesheets/Card.css';

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <div className={"card " + this.props.classes}>
                    <div className="card-body">
                        <h6 className="card-title">
                            <Icon icon={this.props.icon} text={this.props.text} />
                        </h6>
                        <p className="card-text">{this.props.value}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
