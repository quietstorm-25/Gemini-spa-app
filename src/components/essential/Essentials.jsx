// components/essentials/Essentials.jsx
import React, { useState } from 'react';
import { FaHeart, FaSearch, FaEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Essentials.css';
import products from '../products/Products'; // extract product list to separate file if needed



const Essentials = () => {
  const [wishlist, setWishlist] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleWishlist = (index) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div className="essentials-section">
      <div className="essentials-header">
        <h3>All Beauty Essentials</h3>
        <p>Beauty & Wellness Products</p>
      </div>

      {/* Mobile: Swiper Carousel */}
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          grabCursor
          style={{ paddingBottom: '2rem' }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="essential-card">
                {product.discount && (
                  <div className="discount-tag">OFF {product.discount}%</div>
                )}
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-icons">
                    <FaEye />
                    <FaSearch />
                    <FaHeart
                      onClick={() => toggleWishlist(index)}
                      style={{
                        fill: wishlist.includes(index) ? '#f44336' : '#4c2a6a',
                        transition: 'fill 0.3s ease',
                      }}
                    />
                  </div>
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  ${product.price.toFixed(2)}{' '}
                  {product.oldPrice && <del>${product.oldPrice.toFixed(2)}</del>}
                </div>
                <div className="product-rating">{'★'.repeat(product.rating)}</div>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <div className="essentials-grid">
            {products.slice(0, visibleCount).map((product, index) => (
              <div className="essential-card" key={index}>
                {product.discount && (
                  <div className="discount-tag">OFF {product.discount}%</div>
                )}
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-icons">
                    <FaEye />
                    <FaSearch />
                    <FaHeart
                      onClick={() => toggleWishlist(index)}
                      style={{
                        fill: wishlist.includes(index) ? '#f44336' : '#4c2a6a',
                        transition: 'fill 0.3s ease',
                      }}
                    />
                  </div>
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  ${product.price.toFixed(2)}{' '}
                  {product.oldPrice && <del>${product.oldPrice.toFixed(2)}</del>}
                </div>
                <div className="product-rating">{'★'.repeat(product.rating)}</div>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            ))}
          </div>

          {visibleCount < products.length && (
            <div style={{ marginTop: '2rem' }}>
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Essentials;
