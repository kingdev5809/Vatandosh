import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import { GET_CHAT_DATA } from "../../services/api/utils";

// Get All Chats
export const getAllChats = createAsyncThunk("get/allChats", async () => {
  return await axios.get(`${GET_CHAT_DATA}/chats`).then((res) => res.data);
});

// Get Messages
export const getMessages = createAsyncThunk(
  "get/messages",
  async ({ chat_id, per_page, chat_type, page }) => {
    return await axios
      .get(
        `${GET_CHAT_DATA}/chat/${chat_id}?per_page=${per_page}&type=${chat_type}&page=${page}`
      )
      .then((res) => res.data);
  }
);

// Send Message
export const sendMessage = createAsyncThunk("send/message", async (payload) => {
  return await axios
    .post(`${GET_CHAT_DATA}/send`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
});