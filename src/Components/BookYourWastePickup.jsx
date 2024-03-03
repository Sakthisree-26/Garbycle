import React, { useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { LoadScript } from '@react-google-maps/api';
import { FaRecycle, FaCalendarAlt, FaClock, FaCheck, FaTimes } from 'react-icons/fa';
import './Bywp.css';

// Replace with your actual API key
const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

const BookYourWastePickup = () => {
  const [address, setAddress] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [trackingStage, setTrackingStage] = useState('Pickup Confirmed');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  }, []);

  const handleGetAddress = async () => {
    if (!mapCenter.lat || !mapCenter.lng) {
      console.error('Map center is not yet available. Please wait for the location to load.');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    const latlng = new window.google.maps.LatLng(mapCenter.lat, mapCenter.lng);

    try {
      const results = await geocoder.geocode({ location: latlng });
      if (results[0]) {
        const formattedAddress = results[0].formatted_address;
        setAddress(formattedAddress);
      } else {
        console.error('No address found for the given coordinates.');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handleSchedulePickup = () => {
    setShowScheduleModal(true);
  };

  const handleConfirmSchedule = () => {
    // Perform logic to confirm the schedule
    console.log('Scheduled Date:', selectedDate);
    console.log('Selected Time Slot:', selectedTimeSlot);

    // Close the modal and update tracking stage
    setShowScheduleModal(false);
    setTrackingStage('Pickup Confirmed');
    setShowPopup(true);

    // Simulate EcoCaptain assignment after 5 seconds
    setTimeout(() => {
      setTrackingStage('EcoCaptain Assigned');
      setShowPopup(false);
    }, 5000); // 5 seconds delay
  };

  const handleCancelSchedule = () => {
    // Close the modal and reset state
    setShowScheduleModal(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <div className="container">
      <div className="central-content">
        <div className="address-section">
          <LoadScript googleMapsApiKey={apiKey} loading="async">
            <GoogleMap
              mapContainerStyle={{ height: '200px', width: '100%' }}
              zoom={15}
              center={mapCenter}
            />
          </LoadScript>
          <button className="green-button" onClick={handleGetAddress}>
            <FaRecycle /> Get Address
          </button>
          <p>Address: {address}</p>
        </div>
        <div className="schedule-section">
          <button className="green-button" onClick={handleSchedulePickup}>
            <FaCalendarAlt /> Schedule Pickup
          </button>
          {showScheduleModal && (
            <div className="modal">
              <div className="modal-header">
                <h2>Schedule Waste Pickup</h2>
                <span className="close-btn" onClick={handleCancelSchedule}>
                  <FaTimes />
                </span>
              </div>
              <div className="modal-content">
                <label htmlFor="pickupDate">Select Date:</label>
                <input type="date" id="pickupDate" onChange={handleDateChange} required />
                <br />
                <label htmlFor="pickupTimeSlot">Select Time Slot:</label>
                <select id="pickupTimeSlot" onChange={handleTimeSlotChange} required>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
                <br />
                <button className="green-button" onClick={handleConfirmSchedule}>
                  <FaCheck /> Confirm Schedule
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="tracking-stages">
          <div className={`tracking-stage ${trackingStage === 'Pickup Confirmed' ? 'active-stage' : ''}`}>
            <div className="stage-icon">📦</div>
            <div className="stage-text">Pickup Confirmed</div>
            {showPopup && <div className="popup">Green Signal! Pickup Confirmed</div>}
          </div>
          <div className="dotted-track"></div>
          <div className={`tracking-stage ${trackingStage === 'EcoCaptain Assigned' ? 'active-stage' : ''}`}>
            <div className="stage-icon">🚛</div>
            <div className="stage-text">EcoCaptain Assigned</div>
          </div>
          <div className="dotted-track"></div>
          <div className={`tracking-stage ${trackingStage === 'Arrived' ? 'active-stage' : ''}`}>
            <div className="stage-icon">📍</div>
            <div className="stage-text">Arrived</div>
          </div>
          <div className="dotted-track"></div>
          <div className={`tracking-stage ${trackingStage === 'Waste Collected' ? 'active-stage' : ''}`}>
            <div className="stage-icon">🗑️</div>
            <div className="stage-text">Waste Collected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourWastePickup;


