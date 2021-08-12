import React from 'react'

function navbar() {
    return (
        <nav className="shadow-sm navbar  navbar-expand-lg navbar-light bg-white">

  <a className="navbar-brand border p-2 bg-light " href="#"><i class="fa fa-list  ml-2 mr-4" aria-hidden="true"></i>Categories</a>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active ml-2 mr-2">
        <a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active  ml-2 mr-2">
        <a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active ml-2 mr-2">
        <a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active ml-2 mr-2">
        <a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active ml-2 mr-2">
        <a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
   
      
    </ul>

    <ul className="navbar-nav  ">
      <li className="nav-item active mr-3">
        <a className="nav-link" href="#">Track Your order <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
   
  </div>
</nav>
    )
}

export default navbar
