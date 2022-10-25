import React, { Component } from 'react'
export default class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phoneNumber: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        data.phone_number = data.phoneNumber
        delete data.phoneNumber;
        const customerURL = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(customerURL, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);
        }

        const cleared = {
            name: '',
            address: '',
            phoneNumber: ''
        }
        this.setState(cleared);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({ address: value });
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({ phoneNumber: value });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4 bdr">
                            <h1>New customer</h1>
                            <form onSubmit={this.handleSubmit} id="create-customer-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                                    <label htmlFor="address">Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handlePhoneNumberChange} value={this.state.phoneNumber} placeholder="Phone Number" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" />
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                </div>
                                <button className="btn btn-outline-dark">Let's get to Buying!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
