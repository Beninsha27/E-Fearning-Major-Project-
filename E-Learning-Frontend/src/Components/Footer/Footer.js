import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer-07">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <p class="menu">
          <Link to="/home">Home</Link>
          <Link to="/About">About</Link>
        </p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12 text-center">
        <div class="social-icons">
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12 text-center">
        <p class="copyright">
          Copyright &copy; All
          rights reserved | E-Learning
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Footer;
