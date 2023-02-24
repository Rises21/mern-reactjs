import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header, Footer, Home, AboutMe } from './Komponen/index';
import './App.css';

function App() {

  const [rute] = useState([
    {
      path: '/',
      label: 'Home',
      element: <Home />,
    },
    {
      path: '/about',
      label: 'AboutMe',
      element: <AboutMe />,
    },
  ]);

  return (
     <Router>
      <Header rute={rute} />
      <Routes>
      {rute.map( (rutes, index) => (
       <Route key={index} path={rutes.path} label={rutes.label} element={rutes.element} />
      ))}
      </Routes>
    <Footer />
   </Router>
  );
}

export default App;
