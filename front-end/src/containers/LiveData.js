import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import Circuit from "../components/Circuit";
import '../stylesheets/LiveData.css';

const Twitch = window.Twitch;

class LiveData extends Component {

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
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div id="twitch-embed"/>
                            </div>
                            <div className="col-12">
                                <Circuit />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <RaceData />
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveData;
