import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Sales</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><NavLink className="dropdown-item" aria-current="page" to="customers/new/">New Customers</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-persons/new/">New Employee</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/new/">New Sales!</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/">Sales Records</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/filter/">Past Employee Sales</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Inventory</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><NavLink className="dropdown-item" aria-current="page" to="manufacturers/new/">New Manufacturer</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="manufacturers/">All Manufacturers</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="models/new/">New Vehicle Model</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="models/">All Models</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="automobiles/new/">New Automobile</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="automobiles/">All Automobiles</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Service</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><NavLink className="dropdown-item" aria-current="page" to="technician/new">New Technician</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/new">New Service Appointment</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/appointments">Service Appointments</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/history">Service History</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Nav;
