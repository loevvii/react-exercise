import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary position-absolute w-100 align-items-right">
      <div className="container-fluid d-flex align-right"> 
        <a className="navbar-brand" href="#">LV</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#Profile">Abt Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Portfolio">My Prtfl</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Cntct</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar