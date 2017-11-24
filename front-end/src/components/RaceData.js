import React, { Component } from 'react';
import Helper from "../utilities/Helper";
import Car from "./Car";
import '../stylesheets/RaceData.css';

class RaceData extends Component {

    render() {
        let headers = (
            <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Interval</th>
                <th>Fastest lap</th>
                <th>Current lap</th>
                <th>Sector 1</th>
                <th>Sector 2</th>
                <th>Sector 3</th>
                <th>Last lap</th>
                <th>Lap</th>
                <th>Pits</th>
                <th>Tires</th>
            </tr>
        );

        let rows = [];
        let cars = Helper.sortByKey(this.props.data.cars, 'car_position');
        for(let i=0; i<cars.length; i++) {
            let car = cars[i];
            car.car_ahead = cars[i-1];
            car.car_behind = cars[i+1];
            rows.push(
                <Car key={i} data={car} />
            )
        }

        return (
            <div className="RaceData">
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            {headers}
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RaceData;
