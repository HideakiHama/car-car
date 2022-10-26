import React, { Component } from 'react'

export default class VehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            picture_url: '',
            manufacturer: '',
            manufacturers: [],
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    }

    async handleSubmit(event) {
        const data = { ...this.state };
        delete data.manufacturers
        const createVehicleModel = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(createVehicleModel, fetchConfig);
        if (response.ok) {
            const newVehicleModel = await response.json();
            console.log(newVehicleModel);
        }

        const cleared = {
            name: "",
            picture_url: "",
            manufacturer: ""
        }
        event.setState(cleared);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({ picture_url: value });
    }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value });
    }

    async componentDidMount() {
        fetch('http://localhost:8100/api/manufacturers/')
            .then(manufacturers => manufacturers.json())
            .then(manufacturers => this.setState(manufacturers))
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1 style={{color:"green"}}>New Vehicle Model</h1>
                            <form onSubmit={this.handleSubmit} id="create-vehicleModel-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name of Model</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                                    <label htmlFor="picture_url">Picture URL</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleManufacturerChange} placeholder="Manufacturer" required name="manufacturers" id="manufacturers" className="form-select">
                                        <option value="">Manufacturer</option>
                                        {this.state.manufacturers.map(manufacturer => {
                                            return (
                                                <option key={manufacturer.id} value={manufacturer.id}>
                                                    {manufacturer.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <button className="btn btn-outline-success">Create</button>
                            </form>
                            <br></br>
                            <br></br>
                            <img src="https://hips.hearstapps.com/hmg-prod/images/design-of-a-sculpted-car-with-sculpting-tools-royalty-free-image-1584895346.jpg?crop=1xw:0.87481xh;center,top&resize=1200:*" 
                                    width="600"
                                    height="300"
                                    alt="fun function"></img>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

