import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

export default function homepage() {
  return (
    <div id="carouselbody">
      <Carousel interval={5000}>
        <Carousel.Item>
          <div className="imgBody">
            <img className="carousel-Img" src="/image/Scarlett.png" />
            <img className="carousel-Img" src="/image/Steven.png" />
            <img className="carousel-Img" src="/image/DJ.png" />
          </div>
          <Carousel.Caption>
            <h3>Build Your Perfect Match</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgBody">
            <img className="carousel-Img" src="/image/BeyonceProfile.png" />
            <img className="carousel-Img" src="/image/Lance.png" />
            <img className="carousel-Img" src="/image/Adriana.png" />
          </div>
          <Carousel.Caption>
            <h3>Build Your Perfect Match</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
