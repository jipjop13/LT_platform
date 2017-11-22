import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import Circuit from "../components/Circuit";
import Stream from "../components/Stream";

class LiveData extends Component {

    render() {
        return (
            <div className="Stream">
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <Stream />
                            </div>
                            <div className="col-12 col-md-6 offset-md-3">
                                <Circuit />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <RaceData />
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveData;
