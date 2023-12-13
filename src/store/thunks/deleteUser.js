import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const deleteUserThunk = createAsyncThunk('users/deleteUser', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    return user;
});

export {deleteUserThunk};