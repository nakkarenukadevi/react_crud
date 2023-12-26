import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import studentReducers from "./studentSlice";
const Store = configureStore({
  reducer: {
    studentData: studentReducers,
  },
});

export default Store;
