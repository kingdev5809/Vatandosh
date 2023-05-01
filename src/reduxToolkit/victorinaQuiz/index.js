import { createSlice } from "@reduxjs/toolkit";
import { getQuizz } from "./getquiz";

const initialState = {
  loading: true,
  quizData: [],
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuizz.fulfilled, (state, action) => {
        state.loading = false;
        state.quizData = action.payload;
      })
      .addCase(getQuizz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
