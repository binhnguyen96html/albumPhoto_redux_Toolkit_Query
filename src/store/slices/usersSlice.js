import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunks/fetchUsers";
import { addUserThunk } from "../thunks/addUser";
import { deleteUserThunk } from "../thunks/deleteUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isPending: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {

    //FETCH USERS
    builder.addCase(fetchUsersThunk.pending, (state, action) => {
        state.isPending = true;
    });
    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.data = action.payload;
    });

    //ADD USER
    builder.addCase(addUserThunk.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(addUserThunk.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.error;
    });
    builder.addCase(addUserThunk.fulfilled, (state, action) => {
      state.isPending = false;
      state.data.push(action.payload);
    })

    //DELETE USER
    builder.addCase(deleteUserThunk.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(deleteUserThunk.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.error;
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.isPending = false;
      state.data = state.data.filter((user) => user.id !== action.payload.id)
    });

  },
});

export const usersReducer = usersSlice.reducer;
