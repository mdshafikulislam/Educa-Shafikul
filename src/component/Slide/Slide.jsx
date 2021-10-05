import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css';

const Slide = () => {
    return (
        <div>
            <Carousel className="slider-hi">
              <Carousel.Item className="carousel-headind">
                <img
                  className="d-block w-100 img-h8"
                  src={'https://images.unsplash.com/photo-1594788094620-4579ad50c7fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'}
                  alt="First slide"
                />
                <Carousel.Caption >
                    <h2 className="text-primary">We are an online Development of language professionals</h2>
                  <h3 className="checked">Development</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-headind">
                <img
                  className="d-block w-100 img-h8"
                  src={'https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}
                  alt="Second slide"
                />

                <Carousel.Caption>
                <h2 className="text-primary">We are an online Engineering of language professionals</h2>
                  <h3 className="checked">Engineering</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-headind">
                <img
                  className="d-block w-100 img-h8"
                  src={'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=921&q=80'}
                  alt="Third slide"
                />

                <Carousel.Caption>
                <h2 className="text-primary">We are an online Software Engineering professionals</h2>
                  <h3 className="checked">Software</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;