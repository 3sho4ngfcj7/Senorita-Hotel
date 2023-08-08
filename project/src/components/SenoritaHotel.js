import React from 'react';
import './SenoritaHotel.css'; 
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SenoritaHotel = () => {
  return (
    <div className="senorita-hotel-container">
      <header className="header">
        <div className="logo">
        <img src={logo} alt="Logo Señorita Hotel" />
        </div>
        <h1>Señorita Hotel</h1>
        <nav className="navbar">
          <ul>
          <li>
              <NavLink exact to="/senorita-hotel" activeClassName="active-link">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking">Đặt phòng</NavLink>
            </li>
            <li>
              <NavLink exact to="/introduction" activeClassName="active-link">
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">Dịch vụ</NavLink>
            </li>
            <li>
              <NavLink to="/lien-he">Liên hệ</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <h3>WELCOME TO SEÑORITA BOUTIQUE HOTEL !</h3>
        <img src={require('../assets/senorita.jpg')} alt="Ảnh Trang Chủ" />
        <p>Tọa lạc bên bãi biển Mỹ Khê xinh đẹp được tạp chí Forbes bình chọn là một trong sáu bãi biển đẹp nhất hành tinh, 
            khách sạn SEÑORITA BOUTIQUE HOTEL hứa hẹn sẽ mang đến cho Qúy khách một không gian nghỉ ngơi lý tưởng và thoải mái nhất. 
            SEÑORITA BOUTIQUE HOTEL được thiết kế theo lối kiến trúc vừa cổ điển vừa hiện đại mang phong cách sang trọng, tinh tế, lại vừa trang nhã, ấm áp.
            Được thiết kế với hệ thống 46 phòng ngủ khách sạn, trang trí nội thất tiện nghi, hiện đại, hồ bơi tại sân thượng rộng rãi thoáng mát sẽ giúp Quý khách thực sự có được những phút giây thư giãn tuyệt vời bên gia đình và bạn bè..
        </p>
      </div>
    </div>
  );
};
      

export default SenoritaHotel;