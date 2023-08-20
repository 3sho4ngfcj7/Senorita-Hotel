import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css'; 
import logo from '../../assets/logo.png';


const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    require('../../assets/intro_image5.jpg'),
    require('../../assets/intro_image3.jpg'),
    require('../../assets/intro_image1.jpg'),
    require('../../assets/intro_image4.jpg'),
    require('../../assets/intro_image2.jpg')
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="introduction-container">
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
    <div className="intro-slideshow">
      <div className="intro-slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="intro-arrows">
        <div className="intro-arrow intro-arrow-left" onClick={handlePrevSlide}>
         &larr; {/* Mã Unicode cho mũi tên trái */}
        </div>
        <div className="intro-arrow intro-arrow-right" onClick={handleNextSlide}>
          &rarr; {/* Mã Unicode cho mũi tên phải */}
        </div>
      </div>
    </div>

      
      <div className="introduction-text">
      </div>
    <div className="introduction-text">
      <p>Khách sạn SEÑORITA BOUTIQUE HOTEL đạt chuẩn 4 sao được thiết kế theo phong cách cổ điển, sang trọng đầy tinh tế trong từng chi tiết cùng 46 phòng ngủ khách sạn được trang trí nội thất hài hòa, ấm áp, đầy đủ tiện nghi hiện đại với ban công hướng phố hoặc tầm nhìn hướng biển. Bên cạnh đó quầy bar tại sảnh sẽ chào đón quý khách với những nước uống tươi mát. Hồ bơi sân thượng lãng mạn với trọn cảnh thành phố và biển Mỹ Khê, hệ thống nhà hàng luôn phục Qúy vị những món ăn, thức uống tươi ngon nhất của ẩm thực Á – Âu. Cùng với đội ngũ nhân viên chuyên nghiệp, nhiệt tình, chắc chắn sẽ đem lại cho Qúy khách sự gần gũi và thoải mái như tại chính ngôi nhà của mình.</p>
      <p>Hãy đến với Đà Nẵng xinh đẹp để ngắm nhìn toàn cảnh bức tranh thiên nhiên hài hòa của sông – núi - biển – trời, và hãy dừng chân tại SEÑORITA BOUTIQUE HOTEL của chúng tôi để cảm nhận những khoảnh khắc tuyệt vời và thăng hoa của cảm xúc.</p>
      <p>Từ khách sạn, quý khách có thể dễ dàng đi đến những danh lam thắng cảnh nổi tiếng của Đà Nẵng:</p>
      <ul>
        <li>Sân bay quốc tế Đà Nẵng: 5km</li>
        <li>Bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh: 100m (2 phút đi bộ)</li>
        <li>Bảo tàng nghệ thuật Chăm: 3km</li>
        <li>Sông Hàn – trái tim của thành phố: 3km</li>
        <li>Cầu Rồng biểu tượng của Đà Nẵng: 2km</li>
        <li>Núi Ngũ Hành Sơn – Vẻ đẹp tinh hoa của trời đất: 5km</li>
        <li>Bán đảo Sơn Trà – “lá phổi xanh” của thành phố: 7km</li>
        <li>Bà Nà Hill - đường lên Tiên cảnh: 35km</li>
        <li>Phố cổ Hội An: 30km</li>
        <li>Thánh địa Mỹ Sơn: 60km</li>
        <li>Cố đô Huế: 100km</li>
      </ul>
    </div>
    </div>
  );
};

export default Introduction;