import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import Circuit from "../components/Circuit";
import Stream from "../components/Stream";
import NavBar from "../components/NavBar";
import Session from "../components/Session";
import Rest from "../utilities/Rest";

const data = {
    "session": {
        "time": 352.8462829589844,
        "lap_time": 39.148807525634766,
        "lap_distance": 526.166015625,
        "total_distance": 11128.728515625,
        "total_laps": 29,
        "track_size": 5301.28125,
        "session_type": 3,
        "drs_allowed": 0,
        "track_number": 0,
        "vehicle_fia_flag": 3,
        "session_time_left": 6853.77001953125,
        "number_of_cars": 20
    },
    "cars": [
        {
            "last_lap_time": 93.51286315917969,
            "current_lap_time": 53.04356002807617,
            "best_lap_time": 93.51286315917969,
            "sector_1_time": 30.937713623046875,
            "sector_2_time": 0,
            "lap_distance": 2978.251953125,
            "driver_id": 34,
            "team_id": 2,
            "car_position": 19,
            "current_lap_number": 4,
            "tyre_compound": 2,
            "in_pits": 0,
            "sector": 1,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.70689392089844,
            "current_lap_time": 67.10428619384766,
            "best_lap_time": 90.52059173583984,
            "sector_1_time": 29.8902587890625,
            "sector_2_time": 24.70574951171875,
            "lap_distance": 4095.837890625,
            "driver_id": 16,
            "team_id": 0,
            "car_position": 8,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.16021728515625,
            "current_lap_time": 71.89314270019531,
            "best_lap_time": 90.16021728515625,
            "sector_1_time": 29.38934326171875,
            "sector_2_time": 24.046234130859375,
            "lap_distance": 4407.408203125,
            "driver_id": 0,
            "team_id": 1,
            "car_position": 3,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 89.16171264648438,
            "current_lap_time": 73.84828186035156,
            "best_lap_time": 89.15055084228516,
            "sector_1_time": 29.207000732421875,
            "sector_2_time": 23.98675537109375,
            "lap_distance": 4536.23046875,
            "driver_id": 6,
            "team_id": 1,
            "car_position": 2,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.65962219238281,
            "current_lap_time": 66.45643615722656,
            "best_lap_time": 90.43926239013672,
            "sector_1_time": 30.04144287109375,
            "sector_2_time": 24.50347900390625,
            "lap_distance": 4050.671875,
            "driver_id": 7,
            "team_id": 11,
            "car_position": 9,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 168.05201721191406,
            "current_lap_time": 39.148807525634766,
            "best_lap_time": 168.05201721191406,
            "sector_1_time": 0,
            "sector_2_time": 0,
            "lap_distance": 525.95703125,
            "driver_id": 18,
            "team_id": 5,
            "car_position": 20,
            "current_lap_number": 3,
            "tyre_compound": 1,
            "in_pits": 0,
            "sector": 0,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.72628784179688,
            "current_lap_time": 58.02965545654297,
            "best_lap_time": 92.3085708618164,
            "sector_1_time": 30.431793212890625,
            "sector_2_time": 25.050506591796875,
            "lap_distance": 3379.408203125,
            "driver_id": 5,
            "team_id": 6,
            "car_position": 14,
            "current_lap_number": 4,
            "tyre_compound": 1,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.05308532714844,
            "current_lap_time": 55.58647155761719,
            "best_lap_time": 92.05308532714844,
            "sector_1_time": 30.4268798828125,
            "sector_2_time": 24.983978271484375,
            "lap_distance": 3221.76171875,
            "driver_id": 2,
            "team_id": 2,
            "car_position": 17,
            "current_lap_number": 4,
            "tyre_compound": 2,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.76856994628906,
            "current_lap_time": 58.37800216674805,
            "best_lap_time": 92.27690124511719,
            "sector_1_time": 30.52777099609375,
            "sector_2_time": 25.047088623046875,
            "lap_distance": 3393.771484375,
            "driver_id": 35,
            "team_id": 7,
            "car_position": 13,
            "current_lap_number": 4,
            "tyre_compound": 1,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 91.57777404785156,
            "current_lap_time": 63.22182083129883,
            "best_lap_time": 91.57471466064453,
            "sector_1_time": 30.224395751953125,
            "sector_2_time": 24.903656005859375,
            "lap_distance": 3745.00390625,
            "driver_id": 3,
            "team_id": 7,
            "car_position": 11,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 91.59536743164062,
            "current_lap_time": 57.18693923950195,
            "best_lap_time": 91.59536743164062,
            "sector_1_time": 30.44482421875,
            "sector_2_time": 24.885589599609375,
            "lap_distance": 3340.50390625,
            "driver_id": 14,
            "team_id": 11,
            "car_position": 16,
            "current_lap_number": 4,
            "tyre_compound": 1,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.02792358398438,
            "current_lap_time": 60.26186752319336,
            "best_lap_time": 92.00194549560547,
            "sector_1_time": 30.476531982421875,
            "sector_2_time": 24.71600341796875,
            "lap_distance": 3531.48828125,
            "driver_id": 1,
            "team_id": 8,
            "car_position": 12,
            "current_lap_number": 4,
            "tyre_compound": 2,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.73292541503906,
            "current_lap_time": 67.46661376953125,
            "best_lap_time": 90.54529571533203,
            "sector_1_time": 29.92388916015625,
            "sector_2_time": 24.809600830078125,
            "lap_distance": 4108.38671875,
            "driver_id": 10,
            "team_id": 3,
            "car_position": 7,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 91.62109375,
            "current_lap_time": 63.564998626708984,
            "best_lap_time": 91.56089782714844,
            "sector_1_time": 30.23114013671875,
            "sector_2_time": 25.0794677734375,
            "lap_distance": 3757.998046875,
            "driver_id": 20,
            "team_id": 3,
            "car_position": 10,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 89.95358276367188,
            "current_lap_time": 69.68379211425781,
            "best_lap_time": 89.88024139404297,
            "sector_1_time": 29.874908447265625,
            "sector_2_time": 24.1107177734375,
            "lap_distance": 4235.16015625,
            "driver_id": 33,
            "team_id": 6,
            "car_position": 6,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.5906982421875,
            "current_lap_time": 70.34211730957031,
            "best_lap_time": 89.63615417480469,
            "sector_1_time": 29.779388427734375,
            "sector_2_time": 24.3604736328125,
            "lap_distance": 4263.1796875,
            "driver_id": 22,
            "team_id": 0,
            "car_position": 5,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 90.35264587402344,
            "current_lap_time": 71.17607879638672,
            "best_lap_time": 89.96209716796875,
            "sector_1_time": 29.498809814453125,
            "sector_2_time": 24.037261962890625,
            "lap_distance": 4356.75,
            "driver_id": 9,
            "team_id": 4,
            "car_position": 4,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.74868774414062,
            "current_lap_time": 57.68910598754883,
            "best_lap_time": 92.34490966796875,
            "sector_1_time": 30.413116455078125,
            "sector_2_time": 24.980316162109375,
            "lap_distance": 3363.359375,
            "driver_id": 23,
            "team_id": 8,
            "car_position": 15,
            "current_lap_number": 4,
            "tyre_compound": 2,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 91.01011657714844,
            "current_lap_time": 74.5052490234375,
            "best_lap_time": 87.53746795654297,
            "sector_1_time": 28.98760986328125,
            "sector_2_time": 23.625946044921875,
            "lap_distance": 4614.06640625,
            "driver_id": 15,
            "team_id": 4,
            "car_position": 1,
            "current_lap_number": 4,
            "tyre_compound": 0,
            "in_pits": 0,
            "sector": 2,
            "current_lap_invalid": 0,
            "penalties": 0
        },
        {
            "last_lap_time": 92.72920227050781,
            "current_lap_time": 54.47941207885742,
            "best_lap_time": 92.72920227050781,
            "sector_1_time": 30.696685791015625,
            "sector_2_time": 0,
            "lap_distance": 3120.59375,
            "driver_id": 31,
            "team_id": 5,
            "car_position": 18,
            "current_lap_number": 4,
            "tyre_compound": 1,
            "in_pits": 0,
            "sector": 1,
            "current_lap_invalid": 0,
            "penalties": 0
        }
    ]
};

class LiveData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                session: {},
                cars: []
            }
        }
    }

    componentDidMount() {
        // this.fetchData();
        //
        // setInterval(() => {
        //     this.fetchData()
        // }, 1000);

        this.setState({
            data: data
        });
    }

    fetchData() {
        Rest.get((data) => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <div className="LiveData">
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    {/*<Stream />*/}
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-md-7">
                                            <Circuit />
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <Session session={this.state.data.session} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <RaceData data={this.state.data.cars} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveData;
