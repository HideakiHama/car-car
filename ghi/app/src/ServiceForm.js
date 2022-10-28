import React from 'react';
// import { NavLink } from 'react-router-dom';

class ServiceForm extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      vinService:'',
      customerName:'',
      date:'',
      time:'',
      technician:'',
      technicians:[],
      reason:'',
      vip:true,
      vins:[]
    }


    this.handleVinServiceChange = this.handleVinServiceChange.bind(this);
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();

    const data = {...this.state}
    console.log(data)

    // Check the inventory
    const listsOfVins = data.vins.map(vins =>{return(vins["vin"])})
    const isInInventory = listsOfVins.includes(data.vinService)

    // If vin number is NOT from the company's previous inventory
    // delete vip data
    if (!(isInInventory === true)){
      delete data.vip
    }

    data.vin_service = data.vinService
    data.customer_name = data.customerName


    delete data.vinService
    delete data.customerName
    delete data.vins
    delete data.technicians

    const serviceUrl = "http://localhost:8080/api/service/"
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      header: {
        'Content-Type': 'appication/json'
      }
    }
    const response = await fetch(serviceUrl, fetchConfig);
    if(response.ok) {
      const newService = await response.json()
      console.log(newService)

      this.setState ({
        vinService:'',
        customerName:'',
        date:'',
        time:'',
        technician:'',
        reason:''
      });


  }
}

    handleVinServiceChange(event){
      const value = event.target.value;
      this.setState({vinService:value})
    }

    handleCustomerNameChange(event){
      const value = event.target.value;
      this.setState({customerName:value})
    }

    handleDateChange(event){
      const value = event.target.value;
      this.setState({date:value})
    }

    handleTimeChange(event){
      const value = event.target.value;
      this.setState({time:value})
    }

    handleTechnicianChange(event){
      const value = event.target.value;
      this.setState({technician:value})
    }

    handleReasonChange(event){
      const value = event.target.value;
      this.setState({reason:value})
    }


    async componentDidMount() {
      const techUrl = "http://localhost:8080/api/technician/";
      const techResponse = await fetch(techUrl);

      if (techResponse.ok) {
        const data = await techResponse.json();

          this.setState({technicians: data.technician});
      }

      const vinUrl = "http://localhost:8100/api/automobiles/"
      const vinResponse = await fetch(vinUrl);
      if (vinResponse.ok) {
        const data = await vinResponse.json();
          this.setState({vins: data.autos})
      }



    }


    render() {
      return(
  <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 style= {{color:"green"}}>New Service Appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-service-form">

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleVinServiceChange}
                      value = {this.state.vinService}
                      placeholder="Vin number"
                      required
                      type="text"
                      id="vin_service"
                      name="vin_service"
                      className="form-control"
                    />
                    <label htmlFor="vin_service">Vin number</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleCustomerNameChange}
                      value = {this.state.customerName}
                      placeholder="Customer name"
                      required
                      type="text"
                      id="customer_name"
                      name="customer_name"
                      className="form-control"
                    />
                    <label htmlFor="customer_name">Customer's Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleDateChange}
                      value = {this.state.date}
                      placeholder="Date App"
                      required
                      type="date"
                      name="date"
                      id="date"
                      className="form-control"
                    />
                    <label htmlFor="date">Date of Service</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleTimeChange}
                      value = {this.state.time}
                      placeholder="Time App"
                      required
                      type="time"
                      name="time"
                      id="time"
                      className="form-control"
                    />
                    <label htmlFor="time">Time of Service</label>
                  </div>

                  <div className="form-floating mb-3">
                  <select required value={this.state.technician} onChange={this.handleTechnicianChange} id="technician" name="technician" className="form-select">
                    <option value="" >Select below</option>
                    {this.state.technicians.map(tech => {
                      return (
                        <option key={tech.id} value={tech.id}>
                             {tech.name}  -  Employee ID:{tech.employee_number}
                        </option>
                      );
                    })}
                  </select>
                  <label for="floatingSelect">Assign Technician</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleReasonChange }
                      value = {this.state.reason}
                      placeholder="Reason for the service"
                      required
                      type="text"
                      name="reason"
                      id="reason"
                      className="form-control"
                    />
                    <label htmlFor="reason">The reason for the service appointment</label>
                  </div>
                  <button className="btn btn-outline-success">Register</button>

                </form>

              </div>
            </div>
          </div>
      )
    }


  }

  export default ServiceForm;