import React, { useState } from 'react';

export default function ServiceHistory({ pastService }) {

  const[search, setSearch] = useState("");

  const handleFilter = event => {setSearch(event.target.value)};

  const handleSubmit = event => {
    console.log("#####HANDLESUBMIT RAN#####")
    event.preventDefault()

    //

    console.log( "##search##", search)

    //

    setSearch("")

  }


  return (
    <>
    <h1>Service Appointments</h1>
      <div className="constiner">
        <div className="pb row">
          <form id="searchForm" onSubmit={handleSubmit}>
              <input onChange={handleFilter} value={search} type="text" placeholder="Enter the VIN number"/>
              <button stype="submit" >Search Vin</button>
          </form>
        </div>
                { search.length === 17 &&
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
                {pastService?.filter(service => service.vin_service["vin"].toLowerCase().includes(search.toLowerCase()))
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
                </table>
            }
      </div>
    </>

  )
}








// import React from 'react';

// class ServiceHistory extends React.Component {
//   constructor({pastService}) {
//     super({pastService})
//   console.log(pastService)
//   this.state ={
//     vin: '',
//     showVin: false
//   }

//   this.displayVinHandler = this.displayVinHandler.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);

//   }
//   displayVinHandler = (event) => {
//     let updateVin = event.target.value;
//     this.setState({ vin: updateVin });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>VIN</th>
//             <th>Customer name</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Technician</th>
//             <th>Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//         {this.state?.filter(service => service.vin_service["vin"])
//         .map(service => {
//           console.log(service)
//           return(
//             <tr key={service.id}>
//               <td>{service.vin_service["vin"]}</td>
//               <td>{service.customer_name}</td>
//               <td>{service.date_app}</td>
//               <td>{service.time_app}</td>
//               <td>{service.technician["name"]}</td>
//               <td>{service.reason}</td>
//             </tr>
//           )
//         })}
//         </tbody>
//       </table>

//     }


//   render() {

//     return(
//     <div>
//     <h1>Service Appointments</h1>
//       <div className="constiner">
//         <div className="pb row">
//           <form id="searchForm" name="searchForm" onSubmit={this.handleSubmit}>
//               <input type="text" name="vin" onChange={this.displayVinHandler} placeholder="Enter the VIN number"/>
//               <button stype="submit">Search Vin</button>
//               {this.state.showVin &&
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>VIN</th>
//                     <th>Customer name</th>
//                     <th>Date</th>
//                     <th>Time</th>
//                     <th>Technician</th>
//                     <th>Reason</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {pastService?.filter(service => service.vin_service["vin"])
//                 .map(service => {
//                   console.log(service)
//                   return(
//                     <tr key={service.id}>
//                       <td>{service.vin_service["vin"]}</td>
//                       <td>{service.customer_name}</td>
//                       <td>{service.date_app}</td>
//                       <td>{service.time_app}</td>
//                       <td>{service.technician["name"]}</td>
//                       <td>{service.reason}</td>
//                     </tr>
//                   )
//                 })}
//                 </tbody>
//               </table>
//                 }
//             </form>
//             </div>
//         </div>
//     </div>
//     )
//   }
// }

// export default ServiceHistory