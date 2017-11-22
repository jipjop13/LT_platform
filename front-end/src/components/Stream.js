import React, { Component } from 'react';
import '../stylesheets/Stream.css';

const Twitch = window.Twitch;

class Stream extends Component {

    componentDidMount() {
        new Twitch.Embed("twitch-embed", {
            width: '100%',
            height: '100%',
            channel: "monstercat",
            layout: "video"
        })
    }

    render() {
        return (
            <div className="Stream">
                <div id="twitch-embed" className="shadow"/>
            </div>
        );
    }
}

export default Stream;
