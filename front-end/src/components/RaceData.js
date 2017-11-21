import React, { Component } from 'react';
import Tire from "./Tire";

class RaceData extends Component {

    render() {
        let rows = [];
        for(let i=1; i<=20; i++) {
            let tires = Math.ceil(Math.random() * 6);
            rows.push(
                <tr>
                    <td>{i}</td>
                    <td>OTTE</td>
                    <td>1:12,000</td>
                    <td>0:43,123</td>
                    <td>0:47,567</td>
                    <td>0:45,890</td>
                    <td>0:46,524</td>
                    <td>69</td>
                    <td>2</td>
                    <td><Tire type={tires} /></td>
                </tr>
            )
        }

        return (
            <div className="RaceData">
                <table className="table table-dark table-striped table-hover table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Pos</th>
                        <th scope="col">Driver</th>
                        <th scope="col">Gap</th>
                        <th scope="col">Lap time</th>
                        <th scope="col">Sector 1</th>
                        <th scope="col">Sector 2</th>
                        <th scope="col">Sector 3</th>
                        <th scope="col">Lap</th>
                        <th scope="col">Pits</th>
                        <th scope="col">Tires</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RaceData;
