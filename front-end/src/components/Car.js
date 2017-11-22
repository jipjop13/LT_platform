import React, { Component } from 'react';
import Tire from "./Tire";

class Car extends Component {

    constructor(props) {
        super(props);

        let data = props.data;

        // Sector 1
        let sector_1_time = data.sector_1_time;
        if (data.sector_1_time === 0)
            sector_1_time = data.current_lap_time;

        // Sector 2
        let sector_2_time = data.sector_2_time;
        if (data.sector_2_time === 0)
            sector_2_time = data.current_lap_time - data.sector_1_time;

        // Sector 3
        let sector_3_time = 0;
        if (data.sector_1_time && data.sector_2_time)
            sector_3_time = data.current_lap_time - data.sector_1_time - data.sector_1_time;

        // Gap
        let gap = 0;
        if (data.car_ahead)
            gap = data.car_ahead.current_lap_time - data.current_lap_time;

        // Initial state
        this.state = {
            car_position: data.car_position,
            driver_id: data.driver_id,
            gap: gap,
            best_lap_time: data.best_lap_time,
            current_lap_time: data.current_lap_time,
            sector_1_time: sector_1_time,
            sector_2_time: sector_2_time,
            sector_3_time: sector_3_time,
            current_lap_number: data.current_lap_number,
            in_pits: data.in_pits,
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
