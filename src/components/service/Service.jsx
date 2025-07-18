// components/services/Service.jsx
import React from 'react';
import ServiceItem from './ServiceItem';
import S1 from '../../assets/images/S1.png';
import S2 from '../../assets/images/S2.png';
import S3 from '../../assets/images/S3.png';
import S4 from '../../assets/images/S4.png';
import S5 from '../../assets/images/S5.png';
import S6 from '../../assets/images/S6.png';
import './Service.css';

const services = [
  { image: S1, title: 'Spa Treatment' },
  { image: S2, title: 'Hair & Beauty' },
  { image: S3, title: 'Waxing' },
  { image: S4, title: 'Body Shaping' },
  { image: S5, title: 'Herbal Bath' },
  { image: S6, title: 'Body Massage' },
];

const Service = () => {
  return (
    <section className="services-section">
    <div className="services-background">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  
    <div className="services-header">
      <h3>Various Beauty Services</h3>
      <p>Whole Spectrum Of Aesthetic Services</p>
    </div>
  
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceItem key={index} image={service.image} title={service.title} />
      ))}
    </div>
  </section>
  
  );
};

export default Service;
