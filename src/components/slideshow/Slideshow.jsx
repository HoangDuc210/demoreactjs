import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  A11y
} from "swiper/core";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { CLink } from "@coreui/react";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, A11y]);

function Slideshow(props) {

  const [slide, setSlide] = useState([]);

  const getSlide = () => {
    axios.get("https://5f2e1546808569001692380c.mockapi.io/dataAPI/slide").then(res => {
      setSlide(res.data);
    })
  }

  useEffect(() => {
    getSlide();
  }, []);



  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination, Autoplay]}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      className="slideshow"
    >
     
          <SwiperSlide  className="box-slide">
            <div className="box-img">
              <img src={"https://cosp.com.vn/uploaded/D%E1%BB%B1%20%C3%81n/Nam/tiem%20nail/tiem%20nail/Salon-toc-xuan-quy-bac-giang-2.png"} alt={"https://cosp.com.vn/uploaded/D%E1%BB%B1%20%C3%81n/Nam/tiem%20nail/tiem%20nail/Salon-toc-xuan-quy-bac-giang-2.png"} />
            </div>
            <div className="content">
              <p className="title"><CLink to="" >Lorem ipsum dolor sit amet</CLink></p>
              <div className="short_content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique delectus modi beatae aut consectetur incidunt maiores deleniti omnis quam explicabo, tempora sit quod minus harum itaque tenetur inventore sequi iste?
              </div>
            </div>
          </SwiperSlide>);
      
    </Swiper>
  );
}

export default Slideshow;