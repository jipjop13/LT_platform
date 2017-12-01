import React, { Component } from 'react';
import Helper from "../utilities/Helper";
import Car from "./Car";
import '../stylesheets/components/RaceData.css';

class RaceData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: null
        }
    }

    componentWillMount() {
        this.updateState(this.props)
    }

    componentWillReceiveProps(props) {
        this.updateState(props)
    }

    updateState(props) {
        let rows = [];
        let cars = Helper.sortByKey(props.data, 'car_position');
        for(let i=0; i<cars.length; i++) {
            let car = cars[i];
            car.car_ahead = cars[i-1];
            car.car_behind = cars[i+1];
            rows.push(<Car key={i} data={car} />)
        }

        this.setState({
            rows: rows
        })
    }

    render() {
        return (
            <div className="RaceData">
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th/>
                                <th/>
                                <th>Name</th>
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
                        </thead>
                        <tbody>
                            {this.state.rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RaceData;
