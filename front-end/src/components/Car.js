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

        // Gap
        let gap = 0;
        if (data.car_ahead)
            gap = data.car_ahead.current_lap_time - data.current_lap_time;

        // Convert time in seconds to a readable format
        let bestLapTime = Helper.secondsToStr(data.best_lap_time);
        let currentLapTime = Helper.secondsToStr(data.current_lap_time);
        sectorOneTime = Helper.secondsToStr(sectorOneTime);
        sectorTwoTime = Helper.secondsToStr(sectorTwoTime);
        sectorThreeTime = Helper.secondsToStr(sectorThreeTime);
        gap = Helper.secondsToStr(gap);

        // Check if in pits
        let inPits = "";
        if (data.in_pits === 1) inPits = "Pitting";
        if (data.in_pits === 2) inPits = "In Pit Area";

        // Initial state
        this.state = {
            car_position: data.car_position,
            driver_id: data.driver_id,
            gap: gap,
            best_lap_time: bestLapTime,
            current_lap_time: currentLapTime,
            sector_1_time: sectorOneTime,
            sector_2_time: sectorTwoTime,
            sector_3_time: sectorThreeTime,
            current_lap_number: data.current_lap_number,
            in_pits: inPits,
            tyre_compound: data.tyre_compound,
            car_ahead: data.car_ahead,
            car_behind: data.car_behind,
        }

    }

    render() {
        return (
            <tr className="Car">
                <td>{this.state.car_position}</td>
                <td>{this.state.driver_id}</td>
                <td>{this.state.gap}</td>
                <td>{this.state.best_lap_time}</td>
                <td>{this.state.current_lap_time}</td>
                <td>{this.state.sector_1_time}</td>
                <td>{this.state.sector_2_time}</td>
                <td>{this.state.sector_3_time}</td>
                <td>{this.state.current_lap_number}</td>
                <td>{this.state.in_pits}</td>
                <td><Tire type={this.state.tyre_compound} /></td>
            </tr>
        );
    }
}

export default Car;
