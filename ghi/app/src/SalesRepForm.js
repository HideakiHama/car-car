import React, { Component } from 'react'

export default class SalesRepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employeeNumber: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber;
        const createSalesPerson = 'http://localhost:8090/api/sales-persons/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(createSalesPerson, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();
            console.log(newSalesPerson);
        }

        const cleared = {
            name: '',
            employeeNumber: '',
        }
        this.setState(cleared);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({ employeeNumber: value });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1 style= {{color:"green"}}>Welcome New Valuable Employee</h1>
                            <h4> What is Your Name and desired Employee Number</h4>
                            <form onSubmit={this.handleSubmit} id="create-salerep-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleEmployeeNumberChange} value={this.state.employeeNumber} placeholder="Employee Number" required type="number" name="employeeNumber" id="employeeNumber" className="form-control" />
                                    <label htmlFor="employeeNumber">Employee Number</label>
                                </div>
                                <button className="btn btn-outline-success">Let's get to Selling</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

