import React, { useState } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import singleRoomImage from '../../assets/single-room.jpg';
import doubleRoomImage from '../../assets/double-room.jpg';
import tripleRoomImage from '../../assets/triple-room.jpg';
import familyRoomImage from '../../assets/family-room.jpg';
import PaymentPage from '../Payment/PaymentPage';

const Booking = () => {
  const [roomCounts, setRoomCounts] = useState({
    single: 0,
    double: 0,
    triple: 0,
    family: 0,
  });
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const updateRoomCounts = (type, count) => {
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [type]: count,
    }));
  };

  const calculateTotalPrice = () => {
    const roomPrices = {
      single: 100,
      double: 150,
      triple: 200,
      family: 250,
    };

    const total = Object.keys(roomCounts).reduce((acc, type) => {
      return acc + roomCounts[type] * roomPrices[type];
    }, 0);
    return total;
  };

  const roomInfo = {
    single: {
      description: "This room features air conditioning, fireplace and flat-screen TV, free wifi and water bottles",
      bedSize: "1 giường",
      roomSize: "25m2",
      image: singleRoomImage,
    },
    double: {
      description: "This room have a balcony, 2 single beds, TV, 1 Bathroom, Amenities, Complimentary",
      bedSize: "2 giường đơn",
      roomSize: "30m2",
      image: doubleRoomImage,
    },
    triple: {
      description: "This triple room has a fireplace, air conditioning and cable TV.",
      bedSize: "1 giường đơn, 1 giường lớn",
      roomSize: "30m2",
      image: tripleRoomImage,
    },
    family: {
      description: "Family room features air conditioning, fireplace and flat-screen TV.",
      bedSize: "2 giường lớn",
      roomSize: "40m2",
      image: familyRoomImage,
    },
  };

  return (
    <div className="booking-container">
      <h3>ĐẶT PHÒNG KHÁCH SẠN SEÑORITA BOUTIQUE HOTEL</h3>
      <div className="date-selection">
        <label>Ngày đến:</label>
        <input type="date" />
        <label>Ngày đi:</label>
        <input type="date" />
      </div>
      <div className="booking-content">
        <div className="room-selection">
          <h4>Lựa chọn loại phòng</h4>
          {Object.keys(roomInfo).map((type) => (
            <div className="room-type" key={type}>
              <img src={roomInfo[type].image} alt={type} />
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              <p>{roomInfo[type].description}</p>
              <p>Kích thước giường: {roomInfo[type].bedSize}</p>
              <p>Diện tích phòng: {roomInfo[type].roomSize}</p>
              <select
                value={roomCounts[type]}
                onChange={(e) => updateRoomCounts(type, parseInt(e.target.value))}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          ))}
        </div>
        <div className="booking-summary">
          <h4>Thông tin đặt phòng</h4>
          {Object.keys(roomInfo).map((type) => (
            <p key={type}>Số phòng {type}: {roomCounts[type]}</p>
          ))}
          <p>Tổng giá: {calculateTotalPrice()} USD</p>
          <button className="book-button">
            <Link to="/payment">Đặt Phòng</Link>
          </button>
        </div>
        {isPaymentVisible && <PaymentPage bookedRooms={roomCounts} totalPrice={calculateTotalPrice()} />}
      </div>
    </div>
  );
};

export default Booking;
