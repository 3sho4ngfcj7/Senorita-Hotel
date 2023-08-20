import React from 'react';
import './Senoritahotel.css'; 
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Senoritahotel = () => {
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
        <h3>WELCOME TO SEÑORITA BOUTIQUE HOTEL !</h3>
        <img src={require('../../assets/senorita.jpg')} alt="Ảnh Trang Chủ" />
        <p>Tọa lạc bên bãi biển Mỹ Khê xinh đẹp được tạp chí Forbes bình chọn là một trong sáu bãi biển đẹp nhất hành tinh, 
            khách sạn SEÑORITA BOUTIQUE HOTEL hứa hẹn sẽ mang đến cho Quý khách một không gian nghỉ ngơi lý tưởng và thoải mái nhất. 
            SEÑORITA BOUTIQUE HOTEL được thiết kế theo lối kiến trúc vừa cổ điển vừa hiện đại mang phong cách sang trọng, tinh tế, lại vừa trang nhã, ấm áp.
            Được thiết kế với hệ thống 46 phòng ngủ khách sạn, trang trí nội thất tiện nghi, hiện đại, hồ bơi tại sân thượng rộng rãi thoáng mát sẽ giúp Quý khách thực sự có được những phút giây thư giãn tuyệt vời bên gia đình và bạn bè..
        </p>
      </div>
    </div>
  );
};
      

export default Senoritahotel;