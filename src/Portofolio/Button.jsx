import React from "react";
import './index.css';

function Button({ active, children, onClick }) {

  return (
    <li id="navBtn" className="nav-item">
        <button id={children} className={ active ? `active nav-link ` : 'nav-link' } onClick={onClick} aria-current="page" >
        {children}
        </button>
      
    </li>
   
  );
}

export default Button;
