import React, { useState } from 'react';

export default function ServiceHistory({ pastService }) {

  const[searchVin, setSearchVin] = useState("");

  const handleFilter = event => {setSearchVin(event.target.value)};

  return (
    <>
    <h1>Service Appointments</h1>
      <div className="constiner">
        <div className="pb row">
          <form id="searchForm" name="searchForm" method="get">
              <input onChange={handleFilter} value={searchVin} type="text" placeholder="Search"/>
              <button>Search Vin</button>
          </form>
        </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                {searchVin && searchVin.length !== 0 &&
                <tbody>
                {pastService?.filter(service => service.vin_service["vin"].toLowerCase().includes(searchVin.toLowerCase()))
                .map(service => {
                  return(
                    <tr key={service.id}>
                      <td>{service.vin_service["vin"]}</td>
                      <td>{service.customer_name}</td>
                      <td>{service.date_app}</td>
                      <td>{service.time_app}</td>
                      <td>{service.technician["name"]}</td>
                      <td>{service.reason}</td>
                    </tr>
                  )
                })}
                </tbody>
                  }
              </table>

      </div>
    </>




  )


}
