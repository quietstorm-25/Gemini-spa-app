// components/services/ServiceItem.jsx
import React from 'react';
import './Service.css';

const ServiceItem = ({ image, title }) => {
  return (
    <div className="service-item">
      <img src={image} alt={title} className="service-image" />
      <p className="service-title">{title}</p>
    </div>
  );
};

export default ServiceItem;
