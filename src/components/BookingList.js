// BookingList.js
import React from 'react';
import './Hall.css'

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list">
      <h2>Booking List</h2>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Hall Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Time Slot</th>
              <th>Date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.hallName}</td>
                <td>{booking.department}</td>
                <td>{booking.year}</td>
                <td>{booking.timeSlot}</td>
                <td>{booking.date}</td>
                <td>{booking.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available</p>
      )}
    </div>
  );
};

export default BookingList;
