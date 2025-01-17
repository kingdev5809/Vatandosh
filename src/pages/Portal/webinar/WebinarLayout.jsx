import React from "react";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WebinarHeader from "./components/WebinarHeader/WebinarHeader";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

export default function WebinarLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const userToken = getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken]);

  const navData = [
    { id: 1, url: "/portal-category/webinar", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/webinar/webinar-events",
      label: t("webinar.nav2"),
    },
    {
      id: 3,
      url: "/portal-category/webinar/webinar-archive",
      label: t("webinar.nav3"),
    },
    {
      id: 4,
      url: "/portal-category/webinar/webinar-contact",
      label: t("webinar.nav4"),
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <WebinarHeader navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl, category: "webinar" }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
