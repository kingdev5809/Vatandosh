import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  getAllChats,
  getMessages,
} from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./privateChats.scss";
import { ChooseMember } from "../../Chat";

const PrivateChats = ({
  setUserData,
  setShowMessages,
  setActiveUser,
  activeUser,
  setShowDocs,
  setShowLinks,
  activePage,
  data,
  setPrivateChatId,
  activeChat,
}) => {
  const dispatch = useDispatch();

  const [chatRoomId, setChatRoomId] = useState(null);
  const [isActive, setIsActive] = useState(true);

  const { chooseMember, setChooseMember } = useContext(ChooseMember);

  const handleClick = (user, profileImg, chat_room_id) => {
    setPrivateChatId(chat_room_id);
    setActiveUser(user?.user_id);
    setUserData({ user, profileImg });
    setChatRoomId(chat_room_id);
    setShowMessages(true);
    setShowDocs(false);
    setShowLinks(false);
    setChooseMember(null);

    dispatch(
      getMessages({
        chat_id: chat_room_id,
        page: activePage,
      })
    );
  };

  useEffect(() => {
    if (chatRoomId) {
      dispatch(
        getMessages({
          chat_id: chatRoomId,
          page: activePage,
        })
      );
    }
  }, [chatRoomId, activePage]);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  return (
    <div className="users">
      {data?.length === 0 ? (
        <p className="users__no-users">You have not any chat yet.</p>
      ) : (
        data?.map((chat) => {
          let profileImg;
          if (chat?.user) {
            if (chat?.user?.avatar_url) {
              profileImg = (
                <img
                  src={`${PORTAL_IMAGE_URL}${chat?.user?.avatar_url}`}
                  alt="user"
                />
              );
            } else {
              profileImg =
                chat?.user?.first_name?.[0] + chat?.user?.last_name?.[0];
            }
          }

          return chat?.user ? (
            <div
              key={chat?.id}
              className={`users__one-user ${
                chat?.user?.user_id === activeUser ? "active" : ""
              }`}
              onClick={() => {
                handleClick(chat?.user, profileImg, chat?.id);
                setIsActive(false);
              }}
            >
              <div className="users__user-image">
                {profileImg}
                {chat?.user?.last_online_at ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{chat?.user?.first_name + " " + chat?.user?.last_name}</h4>
                {!chat?.user?.last_online_at ? (
                  <p>Online</p>
                ) : (
                  <p>Last seen {chat?.user?.last_online_at}</p>
                )}
              </div>
              {chat.unread ? (
                <div className="users__has-message">
                  {chat.unread > 1000
                    ? `${Math.round(chat.unread / 1000)}k`
                    : chat.unread}
                </div>
              ) : null}
            </div>
          ) : (
            <div
              key={chat?.id}
              className={`users__one-user ${isActive ? "active" : ""}`}
              onClick={() => {
                handleClick(chat, profileImg, chat?.id);
                setIsActive(true);
              }}
            >
              <div className="users__user-image">
                {profileImg}
                {chat?.last_online_at ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{chat?.name}</h4>
                {!chat?.last_online_at ? (
                  <p>Online</p>
                ) : (
                  <p>Last seen {chat?.last_online_at}</p>
                )}
              </div>
              {chat.unread > 0 ? (
                <div className="users__has-message">
                  {chat.unread > 1000
                    ? `${Math.round(chat.unread / 1000)}k`
                    : chat.unread}
                </div>
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
};

export default PrivateChats;
