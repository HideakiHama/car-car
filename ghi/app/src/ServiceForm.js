import React from 'react';


class ServiceForm extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      vinService:'',
      vins:[],
      customerName:'',
      dateApp:'',
      timeApp:'',
      technician:'',
      technicians:[],
      reason:''
    }


    this.handleVinServiceChange = this.handleVinServiceChange.bind(this);
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
    this.handleDateAppChange = this.handleDateAppChange.bind(this);
    this.handleTimeAppChange = this.handleTimeAppChange.bind(this);
    this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();

    const data = {...this.state}
    data.vin_service = data.vinService
    data.customer_name = data.customerName
    data.date_app = data.dateApp
    data.time_app = data.timeApp

    delete data.vinService
    delete data.vins
    delete data.customerName
    delete data.dateApp
    delete data.timeApp
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
        dateApp:'',
        timeApp:'',
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

    handleDateAppChange(event){
      const value = event.target.value;
      this.setState({dateApp:value})
    }

    handleTimeAppChange(event){
      const value = event.target.value;
      this.setState({timeApp:value})
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
                <h1>Create a Service</h1>
                <form onSubmit={this.handleSubmit} id="create-service-form">
                  {/* <div className="form-floating mb-3">
                    <input
                      onChange={this.handleVinServiceChange }
                      value = {this.state.vinService}
                      placeholder="Vin service"
                      required
                      type="text"
                      name="vin_service"
                      id="vin_service"
                      className="form-control"
                    />
                    <label htmlFor="vin_service">VIN</label>
                  </div> */}

                  <div className="form-floating mb-3">
                  <select required value={this.state.vinService} onChange={this.handleVinServiceChange} id="technician" name="technician" className="form-select">
                    <option value="" >Find Vin</option>
                    {this.state.vins.map(autos => {
                      return (
                        <option key={autos.vin} value={autos.vin}>
                             {autos.vin}
                        </option>
                      );
                    })}
                  </select>
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
                      onChange={this.handleDateAppChange}
                      value = {this.state.dateApp}
                      placeholder="Date App"
                      required
                      type="date"
                      name="date_app"
                      id="date_app"
                      className="form-control"
                    />
                    <label htmlFor="date_app">Date of Service</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleTimeAppChange}
                      value = {this.state.timeApp}
                      placeholder="Time App"
                      required
                      type="time"
                      name="time_app"
                      id="time_app"
                      className="form-control"
                    />
                    <label htmlFor="time_app">Time of Service</label>
                  </div>
                  <div className="form-floating mb-3">
                  <select required value={this.state.technician} onChange={this.handleTechnicianChange} id="technician" name="technician" className="form-select">
                    <option value="" >Assign Technician</option>
                    {this.state.technicians.map(tech => {
                      return (
                        <option key={tech.id} value={tech.id}>
                             {tech.name}
                        </option>
                      );
                    })}
                  </select>
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
                  <button className="btn btn-primary">Register</button>

                </form>

              </div>
            </div>
          </div>
      )
    }


  }

  export default ServiceForm;