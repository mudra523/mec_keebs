import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselData } from "./carouselData";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          {CarouselData.map((slide, index) => {
            return (
              <div className="h-screen w-full bg-pink-">
                dfgsd
                {/* <img src={slide.image} /> */}
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}
