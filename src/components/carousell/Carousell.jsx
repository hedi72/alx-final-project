import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Carousel({ imageSrc = [] }) {
  return (
    <MDBCarousel showIndicators showControls fade>
      {imageSrc.map((src, index) => (
        <MDBCarouselItem key={index} itemId={index + 1}>
          <img
            src={src}
            className="d-block w-100"
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: '300px' }}
          />
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
}
