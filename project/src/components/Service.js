import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'; 
import logo from '../assets/logo.png';

const Service = () => {
  return (
    <div className="service-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo Señorita Hotel" />
        </div>
        <h1>Señorita Hotel</h1>
        <nav className="navbar">
          <ul>
            <li><Link to="/senorita-hotel" className="home-link">Trang chủ</Link></li>
            <li><Link to="/booking">Đặt phòng</Link></li>
            <li><Link to="/introduction">Giới thiệu</Link></li>
            <li><Link to="/service">Dịch vụ</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>
      </header>
      <div className="service-content">
        {/* Nội dung trang "Dịch vụ" */}
      </div>
    </div>
  );
};

export default Service;
