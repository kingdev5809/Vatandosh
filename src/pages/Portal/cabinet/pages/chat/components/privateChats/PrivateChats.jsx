import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllChats,
  getMessages,
} from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./privateChats.scss";

const PrivateChats = ({
  setUserData,
  setShowMessages,
  setActiveUser,
  activeUser,
  setShowDocs,
  setShowLinks,
  activePage,
}) => {
  const dispatch = useDispatch();

  const allChatLoading = useSelector((state) => state.chatSlice.allChatLoading);
  const allChatsData = useSelector((state) => state.chatSlice.allChatsData);
  const messagesData = useSelector((state) => state.chatSlice.messagesData);
  const messagesLoading = useSelector(
    (state) => state.chatSlice.messagesLoading
  );
  const user = useSelector((state) => state.authSlice.userData);

  const [chatRoomId, setChatRoomId] = useState(null);

  const handleClick = (user, profileImg) => {
    console.log(user);
    setActiveUser(user.id);
    setUserData({ user, profileImg });
    setChatRoomId(messagesData.chat.id);
    setShowMessages(true);
    setShowDocs(false);
    setShowLinks(false);

    dispatch(
      getMessages({
        chat_id: messagesData.chat.id,
        chat_type: 1,
        page: activePage,
      })
    );
  };

  // useEffect(() => {
  //   if (chatRoomId) {
  //     dispatch(
  //       getMessages({
  //         chat_id: chatRoomId,
  //         chat_type: 1,
  //         page: activePage,
  //       })
  //     );
  //   }
  // }, [chatRoomId, activePage]);

  useEffect(() => {
    dispatch(getAllChats());
    // dispatch(
    //   getMessages({
    //     chat_id: 13,
    //     chat_type: 1,
    //     page: activePage,
    //   })
    // );
  }, []);

  // if (allChatLoading || messagesLoading) {
  //   return <Spinner position="full" />;
  // }

  const privateUser =
    messagesData &&
    messagesData?.messages?.data?.find((el) => el.user_id !== user.id).user;

  console.log(allChatsData);

  return (
    <div className="users">
      {allChatsData?.chats.length === 0 ? (
        <p className="users__no-users">You have not any chat yet.</p>
      ) : (
        allChatsData?.chats.map((chat) => {
          // console.log(chat, activeUser);
          let profileImg;
          if (privateUser?.avatar) {
            profileImg = (
              <img
                src={`${PORTAL_IMAGE_URL}${privateUser?.avatar}`}
                alt="user"
              />
            );
          } else {
            const names = privateUser?.name.split(" ");
            // profileImg = names[0][0] + names[1][0];
          }

          return chat.type === "private" ? (
            <div
              key={chat.id}
              className={`users__one-user ${
                chat.user_id !== activeUser ? "active" : ""
              }`}
              onClick={() => handleClick(privateUser, profileImg)}
            >
              <div className="users__user-image">
                {profileImg}
                {!privateUser?.last_online_at ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{privateUser?.name}</h4>
                {!privateUser?.last_online_at ? (
                  <p>Online</p>
                ) : (
                  <p>Last seen {privateUser?.last_online_at}</p>
                )}
              </div>
              {chat.messages ? (
                <div className="users__has-message">
                  {chat.message > 1000
                    ? `${Math.round(chat.message / 1000)}k`
                    : chat.message}
                </div>
              ) : null}
            </div>
          ) : null;
        })
      )}
    </div>
  );
};

export default PrivateChats;
