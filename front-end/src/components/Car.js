import React, { Component } from 'react';
import Tire from "./Tire";
import Helper from "../utilities/Helper";

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
        let lastLapTime = Helper.secondsToStr(data.last_lap_time);
        sectorOneTime = Helper.secondsToStr(sectorOneTime);
        sectorTwoTime = Helper.secondsToStr(sectorTwoTime);
        sectorThreeTime = Helper.secondsToStr(sectorThreeTime);

        //Check if current lap is invalid
        if (data.current_lap_invalid) {
            currentLapTime = (<b className="red">INVALID</b>);
        }

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
            carPosition = (<i className={"fa fa-trophy " + trophyColor} aria-hidden="true" />);
        }

        // Fetch driver name
        let driver = "jipjop13";

        // Initial state
        this.state = {
            car_position: carPosition,
            driver_id: data.driver_id,
            driver: driver,
            interval: interval,
            best_lap_time: bestLapTime,
            last_lap_time: lastLapTime,
            current_lap_time: currentLapTime,
            sector_1_time: sectorOneTime,
            sector_2_time: sectorTwoTime,
            sector_3_time: sectorThreeTime,
            current_lap_number: data.current_lap_number,
            in_pits: pits,
            tyre_compound: data.tyre_compound,
            car_ahead: data.car_ahead,
            car_behind: data.car_behind,
        }

    }

    handleOnClick(event) {
        event.preventDefault();
        alert(this.state.driver_id);
    }

    render() {
        return (
            <tr className="Car" onClick={(e) => this.handleOnClick(e)}>
                <td>{this.state.car_position}</td>
                <td>{this.state.driver}</td>
                <td>{this.state.interval}</td>
                <td>{this.state.best_lap_time}</td>
                <td>{this.state.current_lap_time}</td>
                <td>{this.state.sector_1_time}</td>
                <td>{this.state.sector_2_time}</td>
                <td>{this.state.sector_3_time}</td>
                <td>{this.state.last_lap_time}</td>
                <td>{this.state.current_lap_number}</td>
                <td>{this.state.in_pits}</td>
                <td><Tire type={this.state.tyre_compound} /></td>
            </tr>
        );
    }
}

export default Car;
