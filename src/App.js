import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import HallBooking from './components/HallBooking';
import BookingList from './components/BookingList';
import HallBookingForm from './components/HallBookingForm';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  // Function to add a new booking
  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* If not authenticated, redirect to login page */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard/hall-booking" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          
          {/* Dashboard with sidebar and protected routes */}
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar onLogout={handleLogout} />
                  <div className="content">
                    <Routes>
                      <Route
                        path="hall-booking"
                        element={<HallBooking bookings={bookings} />}
                      />
                      <Route
                        path="booking-list"
                        element={<BookingList bookings={bookings} />}
                      />
                      <Route
                        path="hall-booking-form/:hallName"
                        element={<HallBookingForm bookings={bookings} addBooking={addBooking} />}
                      />
                    </Routes>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
