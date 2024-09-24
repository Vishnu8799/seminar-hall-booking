// HallBooking.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hall.css';
import Hall from './Assets/Hall1.jpg';
import Hall2 from './Assets/Hall2.jpg';
import Hall3 from './Assets/Hall3.jpg';

const HallBooking = () => {
  const navigate = useNavigate();

  // Handle selecting a hall poster and navigate to form
//   const handleHallSelection = (hallName) => {
//     navigate(`booking-form/${hallName}`);
//   };

  const handleHallSelection = (hallName) => {
    navigate(`/dashboard/hall-booking-form/${hallName}`);
  };

  return (
    <div className="hall-booking">

      <h2 > Hall Booking</h2>

      <div className="hall-posters">
        <div onClick={() => handleHallSelection('Kalam Hall')}>
          <img style={{width:'auto',height:'200px'}} src={Hall} alt="Kalam Hall" />
          <h3>Kalam Hall</h3>
        </div>
        <div  onClick={() => handleHallSelection('Nehru Hall')}>
          <img style={{width:'auto',height:'200px'}} src={Hall2} alt="Nehru Hall" />
          <h3>Nehru Hall</h3>
        </div>
        <div onClick={() => handleHallSelection('Gandhi Hall')}>
          <img style={{width:'auto',height:'200px'}} src={Hall3} alt="Gandhi Hall" />
          <h3>Gandhi Hall</h3>
        </div>
      </div>
    </div>
  );
};

export default HallBooking;
