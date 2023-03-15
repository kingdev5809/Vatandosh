import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import phone from "../../../../../assets/images/icons/Phone.svg";
import Flag from "../../../../../assets/images/Flag.png";
import Blazon from "../../../../../assets/images/blazon.png";
import Music from "../../../../../assets/images/Music.png";
import { useDispatch } from "react-redux";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const activeLanguage = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "uz";

const Navbar = ({ activeSidebar }) => {
  const [activeLinkBar, setactiveLinkBar] = useState(-1);
  const [activeLng, setActiveLng] = useState(activeLanguage);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const languageList = [
    { id: 1, label: "O‘zbekcha", type: "uz" },
    { id: 2, label: "Русский", type: "ru" },
    { id: 3, label: "English", type: "en" },
  ];

  const changeLanguage = (lng) => {
    dispatch(languageChange(lng));
    i18next.changeLanguage(lng);
    setActiveLng(lng);
  };

  return (
    <div
      className={
        activeSidebar ? "header-sideBar activeSideBar" : "header-sideBar"
      }
    >
      <div className="header-sideBar-wrapper">
        <form action="" className="header-sideBar-form">
          <input type="text" placeholder="Qidirish" />
          <CiSearch className="header-sideBar-form-searchIcon" />
        </form>
        <div className="header-sideBar-navlinks">
          <ul className="header-sideBar-navlist">
            {[
              t("about"),
              t("citizin"),
              t("projects"),
              t("contects"),
              t("information"),
              t("link"),
            ].map((el, index) => {
              return (
                <li
                  key={index}
                  className="header-sideBar-navlist-item"
                  style={activeLinkBar === index ? { height: "auto" } : null}
                >
                  <p
                    className="header-sideBar-navlist-item-title"
                    onClick={() =>
                      setactiveLinkBar((el) => (el === index ? -1 : index))
                    }
                  >
                    {el}{" "}
                    <IoIosArrowDown
                      className="header-sideBar-navlist-item-arrowIcon"
                      style={
                        activeLinkBar === index
                          ? { transform: "rotate(180deg)" }
                          : null
                      }
                    />
                  </p>
                  <div className="header-sideBar-navlist-item-links">
                    <NavLink className="header-sideBar-navlist-item-link" to="">
                      Biz haqimizda
                    </NavLink>
                    <NavLink className="header-sideBar-navlist-item-link" to="">
                      {el} kengashi
                    </NavLink>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="header-sideBar-connection">
            <div className="header-sideBar-connection-item">
              <img src={phone} alt="phone" />
              <span>0800-120-55 55</span>
            </div>
            <div className="header-sideBar-connection-item">
              <HiOutlineMail className="header-sideBar-connection-item-icon" />
              <span>info@Vatandoshlar</span>
            </div>
            <div className="header-sideBar-connection-action">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Flag}
                className="header-sideBar-connection-action-img"
                alt="flag"
              />
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Blazon}
                className="header-sideBar-connection-action-img"
                alt="blazon"
              />
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Music}
                className="header-sideBar-connection-action-img"
                alt="music"
              />
            </div>
          </div>
        </div>
        <div className="header-sideBar-bottom">
          <ul className="header-sideBar-bottom-lang">
            {languageList.map((el) => (
              <li
                className={`header-sideBar-bottom-lang-item ${
                  activeLng === el.type ? "langActive" : ""
                }`}
                key={el.id}
                onClick={() => changeLanguage(el.type)}
              >
                {el.label}
              </li>
            ))}
          </ul>

          <div className="header-sideBar-bottom-socialMedia">
            <a
              href="https://ru-ru.facebook.com"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <FaFacebookF className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <FaTwitter className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <AiFillInstagram className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;