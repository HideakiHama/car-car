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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> <div></div><div></div>


          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="technician/new">Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="service/new">Create Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="service/list">Service List</NavLink>
            </li> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Sales</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Inventory</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Service</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><NavLink className="dropdown-item" aria-current="page" to="technician/new">New Technician</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/new">New service appointment</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/list">Service Appointments</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="service/history">Service History</NavLink></li>
                        {/* <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/filter/">Employee Sales</NavLink></li> */}
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
