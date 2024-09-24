// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import '../styles.css'


const Sidebar = (onLogout) => (
  <div className="sidebar">
    <div className="header" style={{height:'100px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
      <h1 style={{fontSize:'22px',paddingTop:'20px',}}>Seminar Hall Booking</h1>
    </div>
    <ul>
      <li><Link to="hall-booking">Hall Booking</Link></li>
      <li><Link to="booking-list">Booking List</Link></li>
      <li><Link onClick={onLogout}>Logout</Link></li>
    </ul>
  </div>
);

export default Sidebar;
