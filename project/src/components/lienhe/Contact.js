import React from 'react';
import './Contact.css'; 
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import contactImage from '../../assets/intro_image2.jpg';

const Contact = () => {
  return (
    <div className="senorita-hotel-container">
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
      <div className="content">
        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <img src={contactImage} alt="Liên hệ với chúng tôi" className="contact-image" />
        <div className="contact-container">
          <div className="contact-form">
            <h4>Gửi liên hệ</h4>
            <input type="text" placeholder="Họ tên" />
            <input type="email" placeholder="Gmail" />
            <textarea placeholder="Comments"></textarea>
            <button className="send-button">Gửi</button>
          </div>
          <div className="contact-info">
            <h4>Thông tin liên hệ</h4>
            <p>Địa chỉ: 89 Trần Bạch Đằng, Phường Mỹ An, Quận Ngũ Hành Sơn, TP Đà Nẵng</p>
            <p>Gmail: sales@senoritahotel.com</p>
            <p>Số điện thoại: +84 236 3777 388</p>
          </div>
        </div>
      </div>
    </div>
  );
};
      
export default Contact;
