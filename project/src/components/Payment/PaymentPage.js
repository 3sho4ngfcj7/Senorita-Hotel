import React, { useState } from 'react';

const PaymentPage = ({ bookedRooms, totalPrice }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    additionalRequests: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any further actions, such as sending the data to a backend server.
  };

  return (
    <div className="payment-container">
      <h3>Thông tin đặt phòng</h3>
      <div>
        <p>Số phòng đơn: {bookedRooms.single}</p>
        <p>Số phòng đôi: {bookedRooms.double}</p>
        <p>Số phòng Triple: {bookedRooms.triple}</p>
        <p>Số phòng Family: {bookedRooms.family}</p>
        <p>Tổng giá: {totalPrice} USD</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Họ Tên:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        <label>Số điện thoại:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        <label>Yêu cầu thêm:</label>
        <textarea name="additionalRequests" value={formData.additionalRequests} onChange={handleInputChange} />
        <button type="submit">Xác nhận đặt phòng</button>
      </form>
    </div>
  );
};

export default PaymentPage;
