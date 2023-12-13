import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


const fetchUsersThunk = createAsyncThunk('users/fetchUsers', async()=>{
    const response = await axios.get('http://localhost:3005/users');
    
    return response.data;
})

export {fetchUsersThunk};