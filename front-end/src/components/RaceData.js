import React, { Component } from 'react';
import Tire from "./Tire";

class Stream extends Component {

    render() {
        return (
            <div className="RaceData">
                <table className="table table-dark table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Pos</th>
                        <th scope="col">Driver</th>
                        <th scope="col">Gap</th>
                        <th scope="col">Sector 1</th>
                        <th scope="col">Sector 2</th>
                        <th scope="col">Sector 3</th>
                        <th scope="col">Laptime</th>
                        <th scope="col">Lap</th>
                        <th scope="col">Pits</th>
                        <th scope="col">Tires</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Otte</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>69</td>
                        <td>2</td>
                        <td><Tire type="i" /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Motte</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>69</td>
                        <td>2</td>
                        <td><Tire type="us" /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Geert</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>69</td>
                        <td>2</td>
                        <td><Tire type="w" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Stream;
