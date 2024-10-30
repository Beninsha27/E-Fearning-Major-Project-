import React from "react";
import icon from "../../Assets/Images/mainicon1.png";
import { Link } from "react-router-dom";

function NavTrainer() {
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
            <Link to="/Trainer/Course" class="nav-item nav-link">
              Courses
            </Link>

            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
              >
                Chat
              </a>
              <div class="dropdown-menu fade-down m-0">
                <Link to="/Trainer/TrainerChatParent" class="dropdown-item">
                  Parent
                </Link>
                <Link to="/Trainer/TrainerChatStd" class="dropdown-item">
                  Student
                </Link>
              
              </div>
            </div>
           
          </div>
          <button style={{margin:"10px",width:"100px"}}  class="btn btn-primary" onClick={()=>{localStorage.clear(); alert("Logged out");window.location.reload(false);}}>Logout</button> 

        </div>
      </nav>
    </div>
  );
}

export default NavTrainer;
