import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bg1 from '../../assets/images/carousel1.png';
import Bg2 from '../../assets/images/carousel2.png';
import Bg3 from '../../assets/images/carousel3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={Bg1} className="d-block w-100 carousel-img" alt="First slide" />
                    <Carousel.Caption className='carousel-caption-left'>
                        <div className="caption-content">
                            <h3 className="caption-title">A World-First Body<br />Treatment Spa</h3>
                            <p className="caption-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="hero-button">Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={Bg2} className="d-block w-100 carousel-img" alt="Second slide" />
                    <Carousel.Caption className='carousel-caption-left'>
                        <div className="caption-content">
                            <h3 className="caption-title">Laser Facial Hair Removal<br />Clinics</h3>
                            <p className="caption-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="hero-button">Shop Now</button>
                        </div> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={Bg3} className="d-block w-100 carousel-img" alt="Third slide" />
                    <Carousel.Caption className="carousel-caption-right">
                        <div className="caption-content">
                            <h3 className="caption-title">Unisex Hi-Tech Beauty<br />Treatments</h3>
                            <p className="caption-description">
                                Lectus feugiat etiam dictum, maximus volutpat, est enim cursus elit, ut luctus sapien ante id mi. In hac habitasse platea dictumst.
                            </p>
                            <button className="hero-button">Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Hero