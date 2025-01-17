import "./Navbar.scss";
import {
  BayroqIcon,
  EmailIcon,
  ExitIcon,
  EyeIcon,
  GerbIcon,
  LogoIcon,
  MessengerIcon,
  MusicIcon,
  NotificationIcon,
  PhoneIcon,
} from "../../../../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../component/Layout/data";

function Navbar() {
  const location = useLocation();
  const editClass = location.pathname;
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const [activeLang, setactiveLang] = useState(false);
  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };
  return (
    <div className="navbarpage">
      <div className="container">
        <Link to="/portal">
          <div className="navbar-list">
            <img src={LogoIcon} alt="" className="navbar-icon" />
            <h4
              className={
                editClass === "/portal-category/volunter"
                  ? `navbar--name`
                  : `navbar--subname`
              }>
              {t("expert.headtitle")}
            </h4>
          </div>
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a
              href="tel:+998555022299"
              className={
                editClass === "/portal-category/volunter"
                  ? `navbar-link`
                  : `navbar--link`
              }>
              <PhoneIcon />
              +998(55)502-22-99
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="mailto:info@vatandoshlarfondi.uz"
              className={
                editClass === "/portal-category/volunter"
                  ? `navbar-link`
                  : `navbar--link`
              }>
              <EmailIcon />
              info@vatandoshlarfondi.uz
            </a>
          </li>
        </ul>
        <div className="navbar-list">
          <button className="navbarpage-icon">
            <img src={GerbIcon} />
          </button>
          <button className="navbarpage-icon">
            <img src={BayroqIcon} />
          </button>
          <button
            className={
              editClass.length <= 3 || id !== undefined
                ? `navbarpage-icon`
                : `navbarpage--icon`
            }>
            <MusicIcon />
          </button>
          <button
            className={
              editClass.length <= 3 || id !== undefined
                ? `navbarpage-notification`
                : `navbarpage--notification`
            }>
            <EyeIcon />
          </button>
          <div className="navbarpage_language">
            <div
              className="navbarpage_language-wrapper"
              style={{
                background: `${
                  editClass.length <= 3 || id !== undefined
                    ? "rgba(255, 255, 255, 0.2)"
                    : `#065EA9`
                }`,
              }}
              onClick={() => setactiveLang((el) => !el)}>
              <CiGlobe className="navbarpage_language-icon" />
              <span style={{ color: "white" }}>
                {languageList.find((lan) => lan.type === language).label}
              </span>
              <IoMdArrowDropdown className="navbarpage_language-iconArrow" />
            </div>
            <div
              className="navbarpage_language-bar"
              style={
                activeLang
                  ? {
                      display: "flex",
                      background: `${
                        editClass.length <= 3
                          ? "rgba(255, 255, 255, 0.2)"
                          : `#065EA9`
                      }`,
                    }
                  : null
              }>
              {languageList.map((el, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleChangeLng(el.type);
                  }}>
                  {el.label}
                </p>
              ))}
            </div>
          </div>
          <button
            className={
              editClass.length <= 3 || id !== undefined
                ? `navbarpage-notification`
                : `navbarpage--notification`
            }>
            <NotificationIcon />
          </button>
          <button
            className={
              editClass.length <= 3 || id !== undefined
                ? `navbarpage-notification`
                : `navbarpage--notification`
            }>
            <MessengerIcon />
          </button>
          <Link
            to={navbarUrl?.register}
            className={
              editClass.length <= 3 || id !== undefined
                ? `navbar-button`
                : `navbar--button`
            }>
            <ExitIcon />
            {t("cabinet")}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
