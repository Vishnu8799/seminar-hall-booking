import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const HallBookingForm = ({ bookings, addBooking }) => {
  const { hallName } = useParams(); // Get the selected hall from the URL
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    hallName: hallName,
    department: '',
    timeSlot: '',
    date: '',
    year: '',
    reason: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleBooking = (e) => {
    e.preventDefault();

    // Check for duplicate bookings
    const isDuplicate = bookings.some(
      (booking) =>
        booking.hallName === bookingData.hallName &&
        booking.timeSlot === bookingData.timeSlot &&
        booking.date === bookingData.date &&
        booking.year === bookingData.year 
    );

    if (isDuplicate) {
      setErrorMessage('This hall is already booked for the selected time slot and date.');
    } else if (!bookingData.department || !bookingData.timeSlot || !bookingData.date || !bookingData.year || !bookingData.reason) {
      setErrorMessage('All fields are required.');
    } else {
      setErrorMessage('');
      addBooking(bookingData); // Add booking to the list
      navigate('/dashboard/hall-booking'); // Navigate back to hall booking page
    }
  };

  return (
    <div className="booking-form">
      <h2>Book {hallName}</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleBooking}>
        <label>Department</label>
        <input
          type="text"
          value={bookingData.department}
          onChange={(e) => setBookingData({ ...bookingData, department: e.target.value })}
          required
        />

        <label>Time Slot</label>
        <select
          value={bookingData.timeSlot}
          onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
          required
        >
          <option value="">Select Slot</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          value={bookingData.date}
          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
          required
        />

        <label>Year</label>
        <select
          value={bookingData.year}
          onChange={(e) => setBookingData({ ...bookingData, year: e.target.value })}
          required
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
        </select>

        <label>Event Name</label>
        <input
          type="text"
          value={bookingData.reason}
          onChange={(e) => setBookingData({ ...bookingData, reason: e.target.value })}
          required
        />

        <button type="submit">Book Hall</button>
      </form>
    </div>
  );
};

export default HallBookingForm;
