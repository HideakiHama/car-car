import React, { useState } from 'react';

export default function ServiceHistory({ pastService }) {

  const[search, setSearch] = useState("");
  const[clicked,setClicked] = useState(null)
  const handleFilter = event => {setSearch(event.target.value)};

  const submitHandler = event => {
    event.preventDefault();
    setClicked(pastService);

    // setSearch("");
  }


  return (
    <>
    <h1 style= {{color:"green"}} >Service History</h1>
      <div className="constiner">
        <div className="pb row">
          <form id="searchForm" onSubmit={submitHandler}>
              <input onChange={handleFilter} value={search} type="text" placeholder="Enter the VIN number"/>
              <button type="submit" >Search Vin</button>
          </form>
        </div>
                { clicked !== null && search.length === 17 &&
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
                <tbody>
                { pastService?.filter(service => service.vin_service.toLowerCase().includes(search.toLowerCase()))
                .map(service => {
                  return(
                    <tr key={service.id}>
                      <td>{service.vin_service}</td>
                      <td>{service.customer_name}</td>
                      <td>{service.date}</td>
                      <td>{service.time}</td>
                      <td>{service.technician["name"]}</td>
                      <td>{service.reason}</td>
                    </tr>
                  )
                })}
                </tbody>
                </table>
            }
      </div>
    </>

  )
}
