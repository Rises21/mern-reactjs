import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';

export default function Header({rute}){
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location,"ini location<<<<<");

  const [active, setActive] = useState('/');
  const [navbar, setNavbar] = useState([]);
  console.log(active,"ini aktif<<<");
  useEffect(() => {
    setNavbar(rute);
  }, [rute]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

   


  return(
    <header className="container-fluid row bg-info">
    <h1 className="col-6 col-md-8">Header Page</h1>
  
  <nav className="col-4 m-auto">
    <ul id="navBar" className="row m-auto">
      {navbar.map((navbars, index) => (
        <li className="col-6 m-auto">
          <Button className="btnNav" key={index} active={active === navbars.path}   
        onClick={()=>{
          navigate(navbars.path);
        }}>
        {navbars.label}
          </Button>
        </li>
        
    
      ))}
      
    </ul>
  </nav>
 </header> 
  );
}

