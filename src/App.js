import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Tugas/NewsWebsite/Header';
import Footer from './Tugas/NewsWebsite/Footer';
import  Homepage  from "./Tugas/index.js"; 
import './App.css';

function App() {

  const [rute] = useState([
    {
      path: '/',
      label: 'Home',
      element: <Homepage />,
    },
    // {
    //   path: '/about',
    //   label: 'AboutMe',
    //   element: <AboutMe />,
    // },
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
