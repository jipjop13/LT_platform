import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class NotFound extends Component {

    render() {
        return (
            <div className="NotFound">
                <Redirect to="/" />
            </div>
        );
    }
}

export default NotFound