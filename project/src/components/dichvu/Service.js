import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'; 
import logo from '../../assets/logo.png';

const Service = () => {
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0]); // Initialize current slides for each service

  const services = [
    {
      title: 'Hồ Bơi',
      images: [
        require('../../assets/service_pool_1.jpg'),
        require('../../assets/service_pool_2.jpg'),
        require('../../assets/service_pool_3.jpg'),
        require('../../assets/service_pool_4.jpg')
      ],
      content: 'Trải nghiệm hồ bơi rộng lớn và thoải mái tại Señorita Hotel. Tận hưởng không gian tươi mát, thư thái và vui vẻ cùng bạn bè và người thân.'
    },
    {
      title: 'Nhà Hàng',
      images: [
        require('../../assets/service_restaurant_1.jpg'),
        require('../../assets/service_restaurant_2.jpg'),
        require('../../assets/service_restaurant_3.jpg'),
        require('../../assets/service_restaurant_4.jpg')
      ],
      content: 'Thưởng thức các món ăn ngon và đa dạng tại nhà hàng của chúng tôi. Menu phong phú từ ẩm thực Á - Âu sẽ làm bạn hài lòng.'
    },
    {
      title: 'Giặt Là',
      images: [
        require('../../assets/service_laundry_1.jpg'),
        require('../../assets/service_laundry_2.jpg'),
        require('../../assets/service_laundry_3.jpg'),
        require('../../assets/service_laundry_4.jpg')
      ],
      content: 'Dịch vụ giặt là chất lượng và tiện lợi tại Señorita Hotel. Chúng tôi đảm bảo quần áo của bạn luôn sạch sẽ và thơm tho.'
    }
  ];

  const handlePrevSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      newSlides[index] = newSlides[index] === 0 ? services[index].images.length - 1 : newSlides[index] - 1;
      return newSlides;
    });
  };

  const handleNextSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      newSlides[index] = newSlides[index] === services[index].images.length - 1 ? 0 : newSlides[index] + 1;
      return newSlides;
    });
  };

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
        {services.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <div className="slideshow">
              <div className="arrows arrow-left" onClick={() => handlePrevSlide(index)}>
                &larr;
              </div>
              <div className="slide">
                <img src={service.images[currentSlides[index]]} alt={`Slide ${currentSlides[index] + 1}`} />
              </div>
              <div className="arrows arrow-right" onClick={() => handleNextSlide(index)}>
                &rarr;
              </div>
            </div>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
