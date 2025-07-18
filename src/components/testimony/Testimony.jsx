// components/testimony/Testimony.jsx
import React from 'react';
import './Testimony.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import T1 from '../../assets/images/t1.png';
import T2 from '../../assets/images/t2.png';
import T3 from '../../assets/images/t3.png';

const testimonials = [
  {
    name: 'Catherin Nessa',
    role: 'CEO',
    image: T1,
    rating: 4,
    text: `“I’ve been using their spa services for over a year and it has completely transformed my skin. The staff are always welcoming and professional.”`,
  },
  {
    name: 'Juliet Storm',
    role: 'Founder',
    image: T2,
    rating: 5,
    text: `“Exceptional service and the products are of top quality. I’ve recommended them to all my friends and family!”`,
  },
  {
    name: 'Naomi Bardi',
    role: 'Director',
    image: T3,
    rating: 3.5,
    text: `“I love the relaxing environment and the results after every session. Great value for money and consistent service.”`,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return stars;
};

const Testimony = () => {
  return (
    <div className="testimony-section">
      <div className="testimony-header">
        <h3>Our Testimonial</h3>
      </div>

      <div className="testimony-wrapper">
        {/* Custom buttons */}
        <div className="custom-swiper-button-prev"><FaChevronLeft /></div>
        <div className="custom-swiper-button-next"><FaChevronRight /></div>

        <Swiper
          className="testimony-slider"
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-left">
                  <img src={t.image} alt={t.name} className="testimonial-image" />
                </div>
                <div className="testimonial-right">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-stars">{renderStars(t.rating)}</div>
                  <p className="testimonial-name">
                    <strong>{t.name}</strong> - <span>{t.role}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimony;
