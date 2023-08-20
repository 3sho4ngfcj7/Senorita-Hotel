import React, { useState } from 'react';
import './Booking.css';
import singleRoomImage from '../../assets/single-room.jpg';
import doubleRoomImage from '../../assets/double-room.jpg';
import tripleRoomImage from '../../assets/triple-room.jpg';
import familyRoomImage from '../../assets/family-room.jpg'; 

const Booking = () => {
  const [roomCounts, setRoomCounts] = useState({
    single: 0,
    double: 0,
    triple: 0,
    family: 0,
  });

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

    let total = 0;
    for (const type in roomCounts) {
      total += roomCounts[type] * roomPrices[type];
    }
    return total;
  };

  return (
    <div className="booking-container">
      <h3>ĐẶT PHÒNG KHÁCH SẠN SEÑORITA BOUTIQUE HOTEL</h3>
      <div className="booking-content">
        <div className="date-selection">
          <label>Ngày đến:</label>
          <input type="date" />
          <label>Ngày đi:</label>
          <input type="date" />
        </div>
        <div className="room-selection">
          <h4>Lựa chọn loại phòng</h4>
          <div className="room-type">
            <img src={singleRoomImage} alt="Phòng đơn" />
            <span>Phòng Đơn</span>
            <select
              value={roomCounts.single}
              onChange={(e) => updateRoomCounts('single', parseInt(e.target.value))}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="room-type">
            <img src={doubleRoomImage} alt="Phòng đôi" />
            <span>Phòng Đôi</span>
            <select
              value={roomCounts.double}
              onChange={(e) => updateRoomCounts('double', parseInt(e.target.value))}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="room-type">
            <img src={tripleRoomImage} alt="Phòng Triple" />
            <span>Phòng Triple</span>
            <select
              value={roomCounts.triple}
              onChange={(e) => updateRoomCounts('triple', parseInt(e.target.value))}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="room-type">
            <img src={familyRoomImage} alt="Phòng Family" />
            <span>Phòng Family</span>
            <select
              value={roomCounts.family}
              onChange={(e) => updateRoomCounts('family', parseInt(e.target.value))}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="booking-summary">
          <h4>Thông tin đặt phòng</h4>
          <p>Số phòng đơn: {roomCounts.single}</p>
          <p>Số phòng đôi: {roomCounts.double}</p>
          <p>Số phòng Triple: {roomCounts.triple}</p>
          <p>Số phòng Family: {roomCounts.family}</p>
          <p>Tổng giá: {calculateTotalPrice()} USD</p>
          <button className="book-button">Đặt Phòng</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
