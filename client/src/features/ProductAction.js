import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "http://localhost:8000/";

export const fetchproducts = createAsyncThunk(
  'products/fetchproducts',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.get(`${backendUrl}api/product/products`, config);
      console.log(response.data);
      localStorage.setItem("products",JSON.stringify(response.data.result))
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);