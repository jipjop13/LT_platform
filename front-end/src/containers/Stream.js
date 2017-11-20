import React, { Component } from 'react';
import RaceData from "../components/RaceData";

const Twitch = window.Twitch;

class Stream extends Component {

    componentDidMount() {
        new Twitch.Embed("twitch-embed", {
            width: '100%',
            height: '100%',
            channel: "lirik",
            layout: "video"
        })
    }

    render() {
        return (
            <div className="Stream">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 stream-wrapper">
                            <div id="twitch-embed"/>
                        </div>
                        <div className="col-6">
                            <RaceData />
                        </div>
                        <div className="col-6">
                            Map
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stream;
