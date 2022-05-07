import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-2/3'>
        <Carousel autoPlay interval={3000} showArrows={true} showThumbs={false}>
          <div>
            <img src='https://img.freepik.com/free-psd/online-courses-banner-template_23-2149109788.jpg?w=2000' />
          </div>
          <div>
            <img src='https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113591.jpg?w=2000' />
          </div>
          <div>
            <img src='https://previews.123rf.com/images/ostapenko/ostapenko1811/ostapenko181100022/111501479-isometric-web-banner-online-training-or-education-and-internet-training-courses-concept-.jpg' />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
