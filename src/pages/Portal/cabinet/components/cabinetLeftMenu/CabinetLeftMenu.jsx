import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./cabinetLeftMenu.scss";

import logo from "../../../../../assets/images/Logo.png";

import UserIcon from "../../../../../assets/images/cabinet/UserIcon";
import UsersIcon from "../../../../../assets/images/cabinet/UsersIcon";
import HandsIcon from "../../../../../assets/images/cabinet/HandsIcon";
import Victorina from "../../../../../assets/images/cabinet/Victorina";
import CalendarIcon from "../../../../../assets/images/cabinet/CalendarIcon";
import Certificate from "../../../../../assets/images/cabinet/Certificate";

const CabinetLeftMenu = () => {
  const menuItems = [
    {
      id: 1,
      url: "/portal-category/cabinet/private-information",
      name: "Личная информация",
      logo: UserIcon,
    },
    {
      id: 2,
      url: "/portal-category/cabinet/volunteering",
      name: "Волонтерская деятелность",
      logo: UserIcon,
    },
    {
      id: 3,
      url: "/portal-category/cabinet/expert-activity",
      name: "Экспертная деятелность",
      logo: HandsIcon,
    },
    {
      id: 4,
      url: "/portal-category/cabinet/organizations",
      name: "Участие в общественных организациях",
      logo: UsersIcon,
    },
    {
      id: 5,
      url: "/portal-category/cabinet/quiz",
      name: "Викторины",
      logo: Victorina,
    },
    {
      id: 6,
      url: "/portal-category/cabinet/events",
      name: "Мероприятия",
      logo: CalendarIcon,
    },
    {
      id: 7,
      url: "/portal-category/cabinet/certificates",
      name: "Сертификаты",
      logo: Certificate,
    },
  ];

  const { pathname } = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(pathname);
  }, []);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <div className="cabinet-navbar">
      <div className="container">
        <section className="cabinet-navbar__body">
          <Link to="/" className="cabinet-navbar__logo">
            <img src={logo} alt="logo" />
            <p>“VATANDOSHLAR” JAMOAT FONDI</p>
          </Link>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.url}
                  className={`${menu.url === activePage ? "active" : ""}`}
                  onClick={() => setActivePage(menu.url)}
                >
                  {<menu.logo />}
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CabinetLeftMenu;
