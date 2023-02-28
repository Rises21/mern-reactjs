import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';
import './index.css';

export default function Header({rute}){
  const navigate = useNavigate();
  const location = useLocation();


  const [active, setActive] = useState('/');
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    setNavbar(rute);
  }, [rute]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

   



  return(
      <nav className="navbar navbar-expand-lg">
        <div id="navBar" className="container-fluid">
          <a class="navbar-brand" href="https://mern-reactjs.onrender.com/">Portofolio Website</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navbar.map((navbars, index) => (
              
                <Button className="btn btn-outline-primary" key={index} active={active === navbars.path}   
              onClick={()=>{
                navigate(navbars.path);
              }}>
              {navbars.label}
                </Button>
              
                ))}
            </ul>
          </div>    
        </div>
      </nav>
  );
}

