import React, { useEffect, useState } from "react";
import "./HeaderTime.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { imageUrl } from "../../../../../../../services/api/utils";

function HeaderTime({ quizData }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const { t } = useTranslation();

  const handleLeft = () => {
    if (slideIndex === 1) {
      setSlideIndex(quizData.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === quizData.length) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const targetDate = new Date("2023-05-20T00:00:00Z");

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const remainingTime = targetDate - currentTime;

      if (remainingTime > 0) {
        const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );

        setDays(formatTime(remainingDays));
        setHours(formatTime(remainingHours));
        setMinutes(formatTime(remainingMinutes));
      }
    };

    const formatTime = (time) => {
      return time < 10 ? `0${time}` : `${time}`;
    };

    const fadeOutIn = () => {
      const elements = document.getElementsByClassName("headertime-box");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("fade-out");
      }

      setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("fade-out");
        }
      }, 500);

      setTimeout(fadeOutIn, 1000);
    };

    updateCountdown();
    fadeOutIn();

    const interval = setInterval(updateCountdown, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="headertime">
      <div className="hero__container container">
        <div className="hero__slider">
          {quizData?.map((slider) => (
            <div
              className={`hero__slider-box ${
                slideIndex === slider?.id ? "active" : ""
              }`}
              key={slider.id}>
              <div
                className={`hero__slider-item`}
                style={{
                  backgroundImage: `url(${imageUrl}/${slider?.image})`,
                }}></div>
              <div className="hero__slider-left-bottom">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: slider.title,
                  }}
                />
                <div className="headertime-page">
                  <div className="headertime-box">
                    <span>{days}</span>
                    <p>Kun</p>
                  </div>
                  <div className="headertime-box">
                    <span>{hours}</span>
                    <p>SOAT</p>
                  </div>
                  <div className="headertime-box">
                    <span>{minutes}</span>
                    <p>DAQIQA</p>
                  </div>
                </div>
                <button
                  style={{ width: "163px" }}
                  className="headertime-button">
                  Batafsil ma’lumot
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom-right">
            <div className="arrow-btn" onClick={handleLeft}>
              <FiChevronLeft />
            </div>
            <div className="arrow-btn" onClick={handleRight}>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTime;
