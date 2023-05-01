import React from "react";
import {
  CalendarIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";
import "./Victorina.scss";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { useEffect } from "react";
import { imageUrl } from "../../../../../../../services/api/utils";

function Victorina() {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizSlice.quizData.quizzes);

  useEffect(() => {
    dispatch(getQuizz());
  }, []);


  return (
    <div className="victorina">
      <div className="container">
        <h2 className="victorina-name">Viktorinalar</h2>
        <div className="victorina-page">
          {quizData?.map((victorina, index) => (
            <div key={index} className="victorina-list">
              <img
                src={`${imageUrl}/${victorina?.image}`}
                alt=""
                className="victorina-img"
              />
              <div className="victorina-items">
                <h4 className="victorina-subname">{victorina.title}</h4>
                <div className="victorina-lists">
                  <div className="victorina-item">
                    <img src={CalendarIcon} alt="" className="victorina-icon" />
                    <p>{victorina.started_at}</p>
                  </div>
                  <div className="victorina-item">
                    <img src={ViewIcon} alt="" className="victorina-icon" />
                    <p>{victorina.count}</p>
                  </div>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: victorina.description }}
                />
                <div className="victorina__list">
                  <span className="victorina__item">
                    <p>{victorina.started_at.slice(9, 11)}</p>
                    <p>Kun</p>
                  </span>
                  <span className="victorina__item">
                    <p>{victorina.started_at.slice(11, 13)}</p>
                    <p>Soat</p>
                  </span>
                  <span className="victorina__item">
                    <p>{victorina.started_at.slice(14, 16)}</p>
                    <p>Daqiqa</p>
                  </span>
                </div>
                {/* <button className="victorina-button">
                  Loyiha tez orada ishga tushadi
                </button> */}
                <a
                  href="/portal-category/victorina/image-project"
                  className="victorina-link">
                  Batafsil ma'lumot
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Victorina;
