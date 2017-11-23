import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import Circuit from "../components/Circuit";
import Stream from "../components/Stream";
import NavBar from "../components/NavBar";

class LiveData extends Component {

    render() {
        return (
            <div className="LiveData">
                <NavBar />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <Stream />
                            </div>
                            <div className="col-12">
                                <div className="max-auto">
                                    <Circuit />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <RaceData />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default LiveData;
