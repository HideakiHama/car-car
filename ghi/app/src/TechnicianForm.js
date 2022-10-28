import React from 'react';
import { NavLink } from 'react-router-dom';

class TechnicianForm extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      name:'',
      employeeNumber:'',
      hasMadeTech: false,
    }


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumber = this.handleEmployeeNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  async handleSubmit(event) {
    event.preventDefault();

    const data = {...this.state}
    data.employee_number = data.employeeNumber

    delete data.employeeNumber
    delete data.hasMadeTech

    const techUrl = "http://localhost:8080/api/technician/"
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      header: {
        'Content-Type': 'appication/json'
      }
    }
    const response = await fetch(techUrl, fetchConfig);
    if(response.ok) {

      this.setState ({
        name:'',
        employeeNumber:'',
        hasMadeTech: true,
      });

  }

}

    handleNameChange(event){
      const value = event.target.value;
      this.setState({name:value})
    }

    handleEmployeeNumber(event){
      const value = event.target.value;
      this.setState({employeeNumber:value})
    }

    render() {

      let messageClasses = "alert alert-success mb-0 d-none"
      let formClasses = ""
      if (this.state.hasMadeTech){
          messageClasses = "alert alert-success mb-0"
          formClasses = "d-none"
      }

     function reload(){
        window.location.reload()
     }

      return(
  <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 style= {{color:"green"}} >New Technician</h1>
                <form className={formClasses} onSubmit={this.handleSubmit} id="create-technician-form">
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleNameChange}
                      value = {this.state.name}
                      placeholder="Technician Name"
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                    />
                    <label htmlFor="name">Technician Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={this.handleEmployeeNumber}
                      value = {this.state.employeeNumber}
                      placeholder="Employee id"
                      required
                      type="text"
                      id="employee_id"
                      name="employee_id"
                      className="form-control"
                    />
                    <label htmlFor="employee_id">Employee ID</label>
                  </div>
                  <button className="btn btn-outline-success">Register</button>
                </form>

                <div className={messageClasses}>
                <h3 style= {{color:"green"}} >Technician Registered!</h3>
                <button onClick={reload} className="btn btn-outline-success">Add more technicians</button>
                <NavLink to="/"><button className="btn btn-outline-success" >Back to homepage</button></NavLink>
                </div>

              </div>
            </div>
          </div>
      )
    }


  }

  export default TechnicianForm;
