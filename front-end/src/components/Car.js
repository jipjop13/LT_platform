import React, { Component } from 'react';
import Tire from "./Tire";
import Helper from "../utilities/Helper";
import Icon from "./Icon";
import '../stylesheets/Teams.css';

const teams = [
    "red-bull",
    "ferrari",
    "mclaren",
    "renault",
    "mercedes",
    "sauber",
    "force-india",
    "williams",
    "toro-rosso",
    "caterham",
    "marussia",
    "haas",
    "manor",
];

class Car extends Component {

    constructor(props) {
        super(props);

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
        if (data.sector_1_time && data.sector_2_time)
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
        let lastLapTime = Helper.secondsToStr(data.lastLapTime);
        sectorOneTime = Helper.secondsToStr(sectorOneTime);
        sectorTwoTime = Helper.secondsToStr(sectorTwoTime);
        sectorThreeTime = Helper.secondsToStr(sectorThreeTime);

        //Check if current lap is invalid
        if (data.current_lap_invalid) {
            currentLapTime = (<b className="red">INVALID</b>);
        }

        // Check if in pits
        let pits = 0;
        if (data.pits === 1 || data.pits === 2)
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

        // Fetch driver name
        let driver = "jipjop13";

        // Get team color
        let teamColor = teams[data.team_id];

        // Initial state
        this.state = {
            carPosition: carPosition,
            driverId: data.driver_id,
            driver: driver,
            teamId: data.team_id,
            teamColor: teamColor,
            interval: interval,
            bestLapTime: bestLapTime,
            lastLapTime: lastLapTime,
            currentLapTime: currentLapTime,
            sectorOneTime: sectorOneTime,
            sectorTwoTime: sectorTwoTime,
            sectorThreeTime: sectorThreeTime,
            currentLapNumber: data.current_lap_number,
            pits: pits,
            TyreCompound: data.tyre_compound,
            carAhead: data.car_ahead,
            carBehind: data.car_behind,
        }

    }

    handleOnClick(event) {
        event.preventDefault();
        alert(this.state.driverId);
    }

    render() {
        return (
            <tr className="Car" onClick={(e) => this.handleOnClick(e)}>
                <td>{this.state.carPosition}</td>
                <td className={this.state.teamColor} />
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
