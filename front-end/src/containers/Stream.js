import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import circuit from "../assets/images/china.svg";

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
                <div className="row no-gutters">
                    <div className="col-sm-12 col-md-6">
                        <div className="row no-gutters">
                            <div className="col-sm-12">
                                <div id="twitch-embed"/>
                            </div>
                            <div className="col-sm-12">
                                <img src={circuit} alt="circuit"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <RaceData />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stream;
