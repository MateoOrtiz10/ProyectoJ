import React from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from '../Img/1.jpg';
import image2 from '../Img/2.jpg';
import image3 from '../Img/3.jpg';
import '../Style/javes.css';
const CarouselContainer=() =>{
  return(
  <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100 ImgSlider" 
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 ImgSlider"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 ImgSlider"
      src={image3}
      alt="Second slide"
    />
    <Carousel.Caption>    
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
  )  
}


export default CarouselContainer;
