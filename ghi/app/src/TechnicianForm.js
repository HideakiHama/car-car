import React from 'react';


class TechnicianForm extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      name:'',
      employeeNumber:''
    }


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumber = this.handleEmployeeNumber.bind(this)

  }


  async handleSubmit(event) {
    event.preventDefault();

    const data = {...this.state}
    data.employee_number = data.employeeNumber

    delete data.employeeNumber

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
      const newtech = await response.json()
      console.log(newtech)

      this.setState ({
        name:'',
        employeeNumber:''
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
      return(
  <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Register a Technician </h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
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

                  <button className="btn btn-primary">Register</button>
                </form>
              </div>
            </div>
          </div>
      )
    }


  }

  export default TechnicianForm;
