import React from "react";
import icon from "../../Assets/Images/mainicon1.png";
import { Link } from "react-router-dom";

function NavStd() {
  return (
    <div className="navdiv">
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/home"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 style={{ color: "#1eb2a6" }}>
            <img src={icon} height="75px" />
          </h2>
        </Link>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/home" class="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" class="nav-item nav-link">
              About
            </Link>
            <Link to="/Profile" class="nav-item nav-link">
              Profile
            </Link>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
              >
                Courses
              </a>
              <div class="dropdown-menu fade-down m-0">
                <Link to="/Student/Courses" class="dropdown-item">
                  View All Courses
                </Link>
                <Link to="/Student/Courses/Mycourses" class="dropdown-item">
                  View my Subscriptions
                </Link>
              </div>
            </div>
            <Link to="/Student/Progress" class="nav-item nav-link">
              Progress
            </Link>
          </div>
          <button style={{margin:"10px",width:"100px"}}  class="btn btn-primary" onClick={()=>{localStorage.clear(); alert("Logged out");window.location.reload(false);}}>Logout</button> 

        </div>
      </nav>
    </div>
  );
}

export default NavStd;
