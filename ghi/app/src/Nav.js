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
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-persons/new/">New Sales Representative</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/new/">New Sales Records</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/">Sales Records</NavLink></li>
                        <li><NavLink className="dropdown-item" aria-current="page" to="sales-records/filter/">Employee Sales</NavLink></li>
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
