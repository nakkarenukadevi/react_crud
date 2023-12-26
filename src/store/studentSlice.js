import { createSlice } from "@reduxjs/toolkit";
let studentSlice = createSlice({
  name: "data",
  initialState: {
    Data: [],
    searchs: {
      searchstudent: "",
    },
  },
  reducers: {
    addStudent: (state, action) => {
      state.Data = action.payload;
    },
    deleteStudentdata: (state, action) => {
      state.Data = action.payload;
    },
    editSudentData: (state, action) => {
      state.Data = action.payload;
    },
    addNewStudent: (state, action) => {
      state.Data.push(action.payload);
    },
    searchStudents: (state, action) => {
      state.searchs = action.payload;
    },
  },
});
export let {
  deleteStudentdata,
  addStudent,
  editSudentData,
  addNewStudent,
  searchStudents,
} = studentSlice.actions;
export default studentSlice.reducer;
