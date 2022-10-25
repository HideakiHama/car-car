import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import SalesRecordForm from "./SalesRecordForm";
import SalesRepForm from "./SalesRepForm";
import SalesRecordList from "./SalesRecordList";
import SalesRecordFiltered from "./SalesRecordFiltered";
import CustomerForm from "./CustomerForm";

import MainPage from "./MainPage";
import Nav from "./Nav";

import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    fetch("http://localhost:8090/api/sales-records/")
      .then(sales_records => sales_records.json())
      .then(sales_records => this.setState(sales_records))
    fetch("http://localhost:8080/api/technicians/")
      .then(technicians => technicians.json())
      .then(technicians => this.setState(technicians))
    fetch("http://localhost:8100/api/manufacturers/")
      .then(manufacturers => manufacturers.json())
      .then(manufacturers => this.setState(manufacturers))
    fetch("http://localhost:8100/api/models/")
      .then(models => models.json())
      .then(models => this.setState(models))
    fetch("http://localhost:8080/api/appointments/")
      .then(appointments => appointments.json())
      .then(appointments => this.setState(appointments))
    fetch("http://localhost:8100/api/automobiles/")
      .then(automobiles => automobiles.json())
      .then(automobiles => this.setState(automobiles))

  }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="sales-persons/">
              <Route path="new/" element={<SalesRepForm />} />
            </Route>
            <Route path="customers/">
              <Route path="new/" element={<CustomerForm />} />
            </Route>
            <Route path="sales-records/">
              <Route path="" element={<SalesRecordList salesRecords={this.state.sales_records} />} />
              <Route path="new/" element={<SalesRecordForm />} />
              <Route path="filter/" element={<SalesRecordFiltered salesRecords={this.state.sales_records} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

