import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";

import "./News.scss";

import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";
import icon5 from "../../assets/images/icons/5.png";
import icon6 from "../../assets/images/icons/6.png";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsSlice.newsData.data);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <section className="news">
      <div className="news__container container">
        <h2 className="news__header">{t("news")}</h2>
        <div className="news__btns">
          <div className="news-btn" data-aos="fade-up">
            <button>{t("news")}</button>
          </div>
          <div className="events-btn">
            <button>{t("event")}</button>
          </div>
          <div className="all-btn">
            <button>{t("all")}</button>
          </div>
        </div>
        <div className="news__body">
          <div className="latest-news">
            <div className="news-cards">
              {newsData?.map((news) => (
                <div className="single-card" key={news.id}>
                  <div className="img-container">
                    <img
                      src={`https://vatanparvarbackend.napaautomotive.uz/storage/${news.img}`}
                      alt={news[`title_${lan}`]}
                    />
                  </div>
                  <div className="news-information">
                    <Link to="/">
                      <h5 className="news__card-title">
                        {news[`title_${lan}`]}
                      </h5>
                      <p
                        className="news__card-text"
                        dangerouslySetInnerHTML={{
                          __html: news[`text_${lan}`],
                        }}
                      />
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="news-date">
                      <BsFillCalendarEventFill />
                      <span>{news.date}</span>
                    </div>
                    <div className="news-views">
                      <IoEye />
                      <span>{news.viewers}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="all-btn-mobile">
                <button>{t("all")}</button>
              </div>
            </div>
          </div>
          <div className="our-activities">
            <div className="goto-system">
              <h4>{t("system")}</h4>
              <div>
                <button onClick={() => navigate("/portal")}>
                  {t("switch")}
                </button>
              </div>
            </div>
            <div className="our-projects">
              <h4>{t("project")}</h4>
              <ul>
                <li>
                  <img src={icon1} alt="icon1" />
                  <span>{t("day")}</span>
                </li>
                <li>
                  <img src={icon2} alt="icon2" />
                  <span>{t("athlete")}</span>
                </li>
                <li>
                  <img src={icon3} alt="icon3" />
                  <span>{t("young")}</span>
                </li>
                <li>
                  <img src={icon4} alt="icon4" />
                  <span>{t("best")}</span>
                </li>
                <li>
                  <img src={icon5} alt="icon5" />
                  <span>{t("national")}</span>
                </li>
                <li>
                  <img src={icon6} alt="icon6" />
                  <span>{t("abroad")}</span>
                </li>
              </ul>
              <div>
                <button>{t("participation")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;