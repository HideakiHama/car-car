


// import ServiceForm from './ServiceForm';
// import ServiceList from './ServiceLists';
// import TechnicianForm from './TechnicianForm';

// function App(props) {

//   return (
//     <BrowserRouter>
//       <Nav />
//       {/* <div className="container"> */}
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="technician/new" element={<TechnicianForm />} />
//           <Route path="service/new" element={<ServiceForm />} />
//           <Route path="service/list" element={<ServiceList service={props.service} />} />
//         </Routes>
//       {/* </div> */}
//     </BrowserRouter>
//   );


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import SalesRecordForm from "./SalesRecordForm";
import SalesRepForm from "./SalesRepForm";
import SalesRecordList from "./SalesRecordList";
import SalesRecordFiltered from "./SalesRecordFiltered";
import CustomerForm from "./CustomerForm";
import ModelsList from "./ModelsList";
import ModelsForm from "./ModelsForm";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturersList from "./ManufacturersList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleInventory from "./VehicleInventory";
import VehicleForm from "./VehicleForm";
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceLists';
import TechnicianForm from './TechnicianForm';
import "./index.css";
import ServiceHistory from "./ServiceHistory";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    fetch("http://localhost:8090/api/sales-records/")
      .then(sales_records => sales_records.json())
      .then(sales_records => this.setState(sales_records))
    fetch("http://localhost:8080/api/technician/")
      .then(technician => technician.json())
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
    fetch("http://localhost:8080/api/service/")
      .then(service => service.json())
      .then(service => this.setState(service))
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
            <Route path="models/">
              <Route path="" element={<ModelsList vehicleList={this.state.models} />} />
              <Route path="new/" element={<ModelsForm />} />
            </Route>
            <Route path="manufacturers/">
              <Route path="" element={<ManufacturersList manuList={this.state.manufacturers} />} />
              <Route path="new/" element={<ManufacturerForm />} />
            </Route>
            <Route path="automobiles/">
              <Route
                path=""
                element={<VehicleInventory InventoryList={this.state.autos} />}
              />
              <Route path="new/" element={<VehicleForm />} />
            </Route>
            <Route path="technician/new" element={<TechnicianForm />} />
            <Route path="service/new" element={<ServiceForm />} />
            <Route path="service/list" element={<ServiceList services={this.state.service} />} />
            <Route path="service/history" element={<ServiceHistory pastService={this.state.service} /> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
