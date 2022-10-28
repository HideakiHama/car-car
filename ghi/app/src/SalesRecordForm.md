import React, { Component } from 'react'

export default class SalesRepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            automobiles: [],
            automobile: '',
            sales_persons: [],
            sales_person: '',
            customers: [],
            customer: '',
            sales_price: "",
        };

        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSalesPriceChange = this.handleSalesPriceChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.automobiles
        delete data.sales_persons
        delete data.customers
        const createSalesRecord = 'http://localhost:8090/api/sales-records/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(createSalesRecord, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            console.log(newSalesRecord);
        }

        const cleared = {
            automobile: "",
            sales_person: "",
            customer: "",
            sales_price: ""
        }
        this.setState(cleared);
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({ automobile: value })
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({ sales_person: value })
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({ customer: value })
    }

    handleSalesPriceChange(event) {
        const value = event.target.value;
        this.setState({ sales_price: value })
    }


    async componentDidMount() {
            fetch('http://localhost:8090/api/sales-persons/')
                .then(sales_persons => sales_persons.json())
                .then(sales_persons => this.setState(sales_persons))
            fetch('http://localhost:8090/api/customers')
                .then(customers => customers.json())
                .then(customers => this.setState(customers))
            fetch('http://localhost:8100/api/automobiles/')
                .then(automobiles => automobiles.json())
                .then(automobiles => 
                    this.setState({
                        automobiles: automobiles.autos
                    })
                )
            // fetch('http://localhost:8090/api/automobileVO/')
            //     .then(automobiles => automobiles.json())
            //     .then(automobiles => this.setState(automobiles))

    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4 bdr">
                            <h1>New Sale</h1>
                            <form onSubmit={this.handleSubmit} id="create-salesrecord-form">
                                <div className="mb-3">
                                    <select onChange={this.handleAutomobileChange} value={this.state.automobile} required name="automobiles" id="automobiles" className="form-select">
                                        <option value="">Car VIN #</option>
                                        {this.state.automobiles
                                            .map(automobile => {
                                                return (
                                                    <option key={automobile.vin} value={automobile.vin}>
                                                        {automobile.vin}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleSalesPersonChange} value={this.state.sales_person} required name="sales_persons" id="sales_persons" className="form-select">
                                        <option value="">Sales Person</option>
                                        {this.state.sales_persons.map(sales_person => {
                                            return (
                                                <option key={sales_person.id} value={sales_person.id}>
                                                    {sales_person.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleCustomerChange} value={this.state.customer} required name="customers" id="customers" className="form-select">
                                        <option value="">Customer</option>
                                        {this.state.customers.map(customer => {
                                            return (
                                                <option key={customer.id} value={customer.id}>
                                                    {customer.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleSalesPriceChange} value={this.state.sales_price} placeholder="Sales Price" required type="text" name="sales_prices" id="sales_prices" className="form-control" />
                                    <label htmlFor="sales_price">Sale Price</label>
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