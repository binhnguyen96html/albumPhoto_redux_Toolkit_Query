import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUserThunk = createAsyncThunk("users/addUser", async ({name, phone}) => {
  const response = await axios.post("http://localhost:3005/users", {
    // name: user.name,
    // phone: user.phone,
    id: faker.string.uuid(),
    name: name,
    phone: phone,
    // phone: '0102'
  });

  return response.data;
});

export { addUserThunk };
