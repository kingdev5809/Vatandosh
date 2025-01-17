import React from "react";
import "./notificationCard.scss";
import { MenuItem } from "@mui/material";
import hours from "../../../../assets/images/hours.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneNotification,
  openNotification,
} from "../../../../reduxToolkit/notificationSlice/notificationSlice";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import AdminAvatar from "../../../../assets/images/admin-avatar.svg";
import { notificationGetTime } from "../../extra";

const isJsonString = (str) => {
  try {
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
};

const NotificationCard = (props) => {
  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(openNotification(event.currentTarget));
    dispatch(getOneNotification(props.id));
  };

  const isJson = isJsonString(props.image);
  const image = isJson ? JSON.parse(props.image) : props.image;
  const eventImage = image
    ? (props.type === "event" &&
        image[0]?.split("/")[0] === "community-events") ||
      image[0]?.split("/")[0] === "community-news"
      ? image[0]
      : image
    : null;

  const { day, hours } = notificationGetTime(props.created_at, lan);

  return (
    <MenuItem onClick={handleClick}>
      <div className="notification-card__inner">
        <div
          className="notification-card__img"
          style={{ borderRadius: props.type === "admin" ? "50%" : "4px" }}
        >
          <img
            src={`${eventImage ? PORTAL_IMAGE_URL + eventImage : AdminAvatar}`}
            alt={props.title}
            style={{ borderRadius: props.type === "admin" ? "50%" : "4px" }}
          />
          {!props?.read && <span className="notification-card__img_dot"></span>}
        </div>

        <div className="notification-card__content">
          <p className="notification-card__text">{props?.title}</p>

          {props?.time && (
            <p className="notification-card__time">
              <img className="notification-card__time_img" src={hours} alt="" />
              <span className="notification-card__time_span">1 soat qoldi</span>
            </p>
          )}

          <p className="notification-card__time_date">{day + "  " + hours}</p>
        </div>
      </div>
    </MenuItem>
  );
};

export default NotificationCard;
