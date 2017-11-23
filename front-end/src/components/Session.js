import React, { Component } from 'react';
import Helper from "../utilities/Helper";
import '../stylesheets/Session.css';
import Icon from "./Icon";

const sessionTypes = ["Unknown", "Practice", "Qualifying", "Race"];
const trackNames = [
    "Melbourne",
    "Sepang",
    "Shanghai",
    "Sakhir (Bahrain)",
    "Catalunya",
    "Monaco",
    "Montreal",
    "Silverstone",
    "Hockenheim",
    "Hungaroring",
    "Spa",
    "Monza",
    "Singapore",
    "Suzuka",
    "Abu Dhabi",
    "Texas",
    "Brazil",
    "Austria",
    "Sochi",
    "Mexico",
    "Baku (Azerbaijan)",
    "Sakhir Short",
    "Silverstone Short",
    "Texas Short",
    "Suzuka Short",
];
const flagColors = ["none", "green", "none", "yellow", "red"];
const textColors = ["white", "white", "white", "black", "white"];
const flagLabels = ["None", "All clear", "None", "Danger", "Session stopped"];

class Session extends Component {

    render() {

        let session = this.props.data.session;

        // Show laps when it is a race, else show time left
        let showLapsOrTimeLeft = null;
        if (session.session_type === 3) {
            showLapsOrTimeLeft = (
                <div className="session-block">
                    <b><Icon icon="refresh" text="Total laps" /></b>
                    <div>{session.total_laps}</div>
                </div>
            )
        } else {
            let timeLeft = Helper.secondsToStr(session.session_time_left, false);
            showLapsOrTimeLeft = (
                <div className="session-block">
                    <b><Icon icon="clock-o" text="Time left" /></b>
                    <div>{timeLeft}</div>
                </div>
            );
        }

        // Get session type
        let sessionType = sessionTypes[session.session_type];

        // Get map name
        let trackName = trackNames[session.track_number];

        // Get flag
        let flagColor = flagColors[session.vehicle_fia_flags];
        let textColor = textColors[session.vehicle_fia_flags];
        let flagLabel = flagLabels[session.vehicle_fia_flags];

        return (
            <div className="Session">
                <div className="row">
                    <div className="col-6">
                        <div className="session-block">
                            <b><Icon icon="globe" text="Track name" /></b>
                            <div>{trackName}</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="session-block">
                            <b><Icon icon="info-circle" text="Session type" /></b>
                            <div>{sessionType}</div>
                        </div>
                    </div>
                    <div className="col-6">
                        {showLapsOrTimeLeft}
                    </div>
                    <div className="col-6">
                        <div className={"session-block bg-" + flagColor + " " + textColor}>
                            <b><Icon icon="flag" text="Flag" /></b>
                            <div>{flagLabel}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Session;
