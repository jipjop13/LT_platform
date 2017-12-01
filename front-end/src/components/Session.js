import React, { Component } from 'react';
import Helper from "../utilities/Helper";
import Card from "./Card";

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

    constructor(props) {
       super(props);

       this.state = {
           showLapsOrTimeLeft: null,
           sessionType: null,
           trackName: null,
           flagColor: null,
           textColor: null,
           flagLabel: null,
       };
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateState(props);
    }

    updateState(props) {
        let session = props.session;

        // Show laps when it is a race, else show time left
        let showLapsOrTimeLeft = null;
        if (session.session_type === 3) {
            showLapsOrTimeLeft = (<Card icon="refresh" text="Total laps" value={session.total_laps} />);
        } else {
            let timeLeft = Helper.secondsToStr(session.session_time_left, false);
            showLapsOrTimeLeft = (<Card icon="clock-o" text="Time left" value={timeLeft} />);
        }

        // Get session type
        let sessionType = sessionTypes[session.session_type];

        // Get map name
        let trackName = trackNames[session.track_number];

        // Get flag
        let flagColor = flagColors[session.vehicle_fia_flag];
        let textColor = textColors[session.vehicle_fia_flag];
        let flagLabel = flagLabels[session.vehicle_fia_flag];

        // Update state
        this.setState({
            showLapsOrTimeLeft: showLapsOrTimeLeft,
            sessionType: sessionType,
            trackName: trackName,
            flagColor: flagColor,
            textColor: textColor,
            flagLabel: flagLabel,
        });
    }

    render() {
        return (
            <div className="Session">
                <div className="row">
                    <div className="col-6">
                        <Card icon="globe" text="Track name" value={this.state.trackName} />
                    </div>
                    <div className="col-6">
                        <Card icon="info-circle" text="Session type" value={this.state.sessionType} />
                    </div>
                    <div className="col-6">
                        {this.state.showLapsOrTimeLeft}
                    </div>
                    <div className="col-6">
                        <Card icon="flag" text="Flag" value={this.state.flagLabel}
                              classes={"bg-" + this.state.flagColor + " " + this.state.textColor} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Session;
