import React from 'react';

const deleteService = async (id) => {

  fetch(`http://localhost:8080/api/service/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  window.location.reload();
}



function ServiceList({ services }) {
console.log(services)
    return(
    <div>
      <h1>Service Appointments</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {services && services.map(service => {
            return (
              <tr key={service.id}>
                <td>{service.vin_service["vin"]}</td>
                <td>{service.customer_name}</td>
                <td>{service.date_app}</td>
                <td>{service.time_app}</td>
                <td>{service.technician["name"]}</td>
                <td>{service.reason}</td>

                <td><button className="btn btn-danger" onClick={() => deleteService(service.id)} type="button">Cancel</button></td>
                <td><button className="btn btn-success" onClick={() => deleteService(service.id)}>Finished</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;