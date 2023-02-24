import React from "react";

function Button({ active, children, onClick }) {
  
  return (
    <button  className={active? 'active' : ''} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
