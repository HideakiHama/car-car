import React, { Component } from 'react'

export default class VehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            year: '',
            vin: '',
            model: '',
            models: []
        };

        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({ color: value })
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({ year: value })
    }

    handleVINChange(event) {
        const value = event.target.value;
        this.setState({ vin: value })
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({ model: value })
    }

    async handleSubmit(event) {
        const data = { ...this.state };
        delete data.models
        const createAutomobile = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(createAutomobile, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            console.log(newAutomobile);
        }

        const cleared = {
            color: '',
            year: '',
            vin: '',
            model: '',
        }
        event.setState(cleared);
    }

    async componentDidMount() {
        Promise.all([
            fetch('http://localhost:8100/api/models/')
        ])
            .then(
                ([models]) => {
                    return Promise.all([
                        models.json()
                    ])
                })
            .then(
                ([models]) => {
                    this.setState(models)
                })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1 style={{color: "Blue"}}>New Automobile</h1>
                            <form onSubmit={this.handleSubmit} id="create-automobile-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                                    <label htmlFor="color">Color</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleYearChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                                    <label htmlFor="year">Year</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleVINChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                                    <label htmlFor="vin">vin</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleModelChange} placeholder="Model" required name="models" id="models" className="form-select">
                                        <option value="">Choose a model</option>
                                        {this.state.models.map(auto => {
                                            return (
                                                <option key={auto.id} value={auto.id}>
                                                    {auto.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <button className="btn btn-outline-dark">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

