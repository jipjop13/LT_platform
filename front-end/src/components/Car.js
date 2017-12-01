import React, { Component } from 'react';
import Tire from "./Tire";
import Helper from "../utilities/Helper";
import Icon from "./Icon";
import '../stylesheets/Teams.css';
import Team from "./Team";

class Car extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carPosition: null,
            driver: null,
            team: null,
            interval: null,
            bestLapTime: null,
            currentLapTime: null,
            sectorOneTime: null,
            sectorTwoTime: null,
            sectorThreeTime: null,
            lastLapTime: null,
            currentLapNumber: null,
            pits: null,
            TyreCompound: null,
        }
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateState(props);
    }

    updateState(props) {
        let data = props.data;

        // Sector 1
        let sectorOneTime = data.sector_1_time;
        if (data.sector_1_time === 0)
            sectorOneTime = data.current_lap_time;

        // Sector 2
        let sectorTwoTime = data.sector_2_time;
        if (data.sector_2_time === 0)
            sectorTwoTime = data.current_lap_time - data.sector_1_time;

        // Sector 3
        let sectorThreeTime = 0;
        if (data.sector_1_time !== 0 && data.sector_2_time !== 0)
            sectorThreeTime = data.current_lap_time - data.sector_1_time - data.sector_2_time;

        // Interval
        let interval = "";
        if (data.car_ahead) {
            interval = data.car_ahead.current_lap_time - data.current_lap_time;
            interval = interval.toFixed(3);
            interval = "+" + interval;
        }

        // Convert time in seconds to a readable format
        let bestLapTime = Helper.secondsToStr(data.best_lap_time);
        let currentLapTime = Helper.secondsToStr(data.current_lap_time);
        let lastLapTime = Helper.secondsToStr(data.last_lap_time);
        sectorOneTime = Helper.secondsToStr(sectorOneTime);
        sectorTwoTime = Helper.secondsToStr(sectorTwoTime);
        sectorThreeTime = Helper.secondsToStr(sectorThreeTime);

        //Check if current lap is invalid
        if (data.current_lap_invalid)
            currentLapTime = (<b className="red">INVALID</b>);

        // Check if in pits
        let pits = 0;
        if (data.in_pits === 1 || data.in_pits === 2)
            pits = (<b className="red">IN PIT</b>);

        // Check car position
        let carPosition = data.car_position;
        if (carPosition <= 3) {
            let trophyColor = "";
            if (carPosition === 1) trophyColor = "gold";
            if (carPosition === 2) trophyColor = "silver";
            if (carPosition === 3) trophyColor = "bronze";
            carPosition = (<Icon icon="trophy" color={trophyColor} />);
        }

        let driver = data.driver_id;
        let team = data.team_id;
        let tyreCompound = data.tyre_compound;
        let currentLapNumber = data.current_lap_number;

        // Update state
        this.setState({
            carPosition: carPosition,
            driver: driver,
            team: team,
            interval: interval,
            bestLapTime: bestLapTime,
            currentLapTime: currentLapTime,
            sectorOneTime: sectorOneTime,
            sectorTwoTime: sectorTwoTime,
            sectorThreeTime: sectorThreeTime,
            lastLapTime: lastLapTime,
            currentLapNumber: currentLapNumber,
            pits: pits,
            TyreCompound: tyreCompound,
        });
    }

    handleOnClick(event) {
        event.preventDefault();
        alert(this.state.driver)
    }

    render() {
        return (
            <tr className="Car" onClick={(e) => this.handleOnClick(e)}>
                <td><b>{this.state.carPosition}</b></td>
                <td><Team team={this.state.team} /></td>
                <td>{this.state.driver}</td>
                <td>{this.state.interval}</td>
                <td>{this.state.bestLapTime}</td>
                <td>{this.state.currentLapTime}</td>
                <td>{this.state.sectorOneTime}</td>
                <td>{this.state.sectorTwoTime}</td>
                <td>{this.state.sectorThreeTime}</td>
                <td>{this.state.lastLapTime}</td>
                <td>{this.state.currentLapNumber}</td>
                <td>{this.state.pits}</td>
                <td><Tire type={this.state.TyreCompound} /></td>
            </tr>
        );
    }
}

export default Car;
