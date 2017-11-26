import React, { Component } from 'react';
import RaceData from "../components/RaceData";
import Circuit from "../components/Circuit";
import Stream from "../components/Stream";
import NavBar from "../components/NavBar";
import Session from "../components/Session";
import Rest from "../utilities/Rest";

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
        this.fetchData();

        setInterval(() => {
            this.fetchData()
        }, 1000);
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
                                            <Session data={this.state.data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <RaceData data={this.state.data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveData;
