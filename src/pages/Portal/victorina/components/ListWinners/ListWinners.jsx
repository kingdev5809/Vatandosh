import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./ListWinners.scss";
import "swiper/css";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";
import WinnerCard from "../WinnerCard/WinnerCard";

export default function ListWinners() {
  const [isHiddenLeftBtn, setisHiddenLeftBtn] = useState(true);
  const [isHiddenRightBtn, setisHiddenRightBtn] = useState(false);

  const handleChange = (swiper) => {
    setisHiddenLeftBtn(swiper.isBeginning);
    setisHiddenRightBtn(swiper.isEnd);
    console.log(swiper.isBeginning);
    console.log(swiper.isEnd);
  };

  return (
    <div className="listwinners">
      <div className="container">
        <h3>G‘oliblar ro‘yxati</h3>
        <button
          className="listwinners-list-leftbtn slider_controls__left"
          style={isHiddenLeftBtn ? { display: "none" } : null}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className="listwinners-list-rightbtn slider_controls__right"
          style={isHiddenRightBtn ? { display: "none" } : null}
        >
          <MdKeyboardArrowRight />
        </button>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          onSlideChange={handleChange}
          navigation={{
            prevEl: ".slider_controls__left",
            nextEl: ".slider_controls__right",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3.5,
              spaceBetween: 18,
            },
            1300: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          className="listwinners-list"
        >
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <SwiperSlide key={el}>
              <WinnerCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}