import React from 'react';


function ServiceList({ services }) {
const deleteService = async (id) => {

  fetch(`http://localhost:8080/api/service/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  window.location.reload();
}

const finishedService = async (id) => {
  fetch(`http://localhost:8080/api/service/${id}/`, {
    method: 'PUT',
    body: JSON.stringify({service_finished:true}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  window.location.reload();

}



  return(
    <div>
      <h1 style= {{color:"green"}} >Service Appointments</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th></th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {services?.filter(service => service.service_finished === false)
          .map(service => {
            return (

              <tr key={service.id}>
                <td>{service.vin_service}</td>
                <td>{service.vip ? 'VIP': false}</td>
                <td>{service.customer_name}</td>
                <td>{service.date}</td>
                <td>{service.time}</td>
                <td>{service.technician["name"]}</td>
                <td>{service.reason}</td>

                <td><button className="btn btn-success" onClick={() => finishedService(service.id)} type="button">Finished</button></td>
                <td><button className="btn btn-danger" onClick={() => deleteService(service.id)} type="button">Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;