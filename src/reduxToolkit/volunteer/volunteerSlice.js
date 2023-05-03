import { createSlice } from "@reduxjs/toolkit";

import {
  getVolunteerAll,
  getVolunteerOne,
  volunteerCreate,
  volunteerUpdate,
  deleteVolunteerOne,
} from "./extraReducer";

const initialState = {
  volunteerLoading: true,
  volunteerData: [],
  volunteerOneLoading: true,
  volunteerOneData: [],
  deleteLoading: true,
  volunteerCreateLoading: true,
  volunteerCreateData: [],
  volunteerUpdateLoading: true,
  volunteerUpdateData: [],
  status: "idle",
  error: null,
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Get volunteers
    builder
      .addCase(getVolunteerAll.pending, (state) => {
        state.volunteerLoading = true;
      })
      .addCase(getVolunteerAll.fulfilled, (state, action) => {
        state.volunteerLoading = false;
        state.volunteerData = action.payload;
      })
      .addCase(getVolunteerAll.rejected, (state, action) => {
        state.volunteerLoading = false;
        state.error = action.error.message;
      });

    // Get one volunteer
    builder
      .addCase(getVolunteerOne.pending, (state) => {
        state.volunteerOneLoading = true;
      })
      .addCase(getVolunteerOne.fulfilled, (state, action) => {
        state.volunteerOneLoading = false;
        state.volunteerOneData = action.payload;
      })
      .addCase(getVolunteerOne.rejected, (state, action) => {
        state.volunteerOneLoading = false;
        state.error = action.error.message;
      });

    // Delete one volunteer
    builder
      .addCase(deleteVolunteerOne.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteVolunteerOne.fulfilled, (state, action) => {
        state.deleteLoading = false;
        alert("Deleted");
      })
      .addCase(deleteVolunteerOne.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.error.message;
      });

    // Create volunteer
    builder
      .addCase(volunteerCreate.pending, (state) => {
        state.volunteerCreateLoading = true;
        state.status = "idle";
      })
      .addCase(volunteerCreate.fulfilled, (state, action) => {
        state.volunteerCreateLoading = false;
        state.volunteerCreateData = action.payload;
        state.status = "succeeded";
      })
      .addCase(volunteerCreate.rejected, (state, action) => {
        state.volunteerCreateLoading = false;
        state.error = action.error.message;
      });

    // Update volunteer
    builder
      .addCase(volunteerUpdate.pending, (state) => {
        state.volunteerUpdateLoading = true;
        state.status = "idle";
      })
      .addCase(volunteerUpdate.fulfilled, (state, action) => {
        state.volunteerUpdateLoading = false;
        state.volunteerUpdateData = action.payload;
        state.status = "succeeded";
      })
      .addCase(volunteerUpdate.rejected, (state, action) => {
        state.volunteerUpdateLoading = false;
        state.error = action.error.message;
      });
  },
});

export default volunteerSlice.reducer;
