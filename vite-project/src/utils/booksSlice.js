import { createSlice } from "@reduxjs/toolkit";
import mockData from "./mockData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [...mockData],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;