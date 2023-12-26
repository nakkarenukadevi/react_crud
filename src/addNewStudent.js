import React, { useState } from "react";
import x_icon from "../src/x_icon.jpg";
import { useDispatch } from "react-redux";
import { addNewStudent } from "./store/studentSlice";
import { useNavigate } from "react-router-dom";

const AddNewStudent = (props) => {
  let setShowAddStudent = props.setShowAddStudent;
  let [addNewStu, setAddNewStu] = useState({
    name: "",
    id: "",
    email: "",
    body: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleUpdateNewStudentData = () => {
    if (
      addNewStu.name &&
      addNewStu.id &&
      addNewStu.body &&
      addNewStu.email != ""
    ) {
      dispatch(addNewStudent(addNewStu));
      props.setShowAddStudent(false);
    }
  };
  return (
    <div className="grid grid-cols-2  fixed top-56 w-1/2  font-bold bg-slate-400 p-5">
      <img
        src={x_icon}
        alt={x_icon}
        onClick={() => setShowAddStudent(false)}
        style={{ widht: "30px", height: "30px" }}
        className="absolute top-3 right-3"
      />

      <div className="grid justify-center items-center">
        <div>Name</div>
        <div>Id</div>
        <div>Email</div>
        <div>student</div>
      </div>
      <div className="grid justify-center items-center">
        <div>
          <input
            typt="text"
            name="name"
            placeholder="Enter name"
            id="name"
            className="border-black border-2 m-2 "
            value={addNewStu.name}
            onChange={(e) => {
              setAddNewStu({ ...addNewStu, name: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            typt="text"
            name="id"
            placeholder="Enter id"
            id="id"
            className="border-black border-2 m-2"
            value={addNewStu.id}
            onChange={(e) => {
              setAddNewStu({ ...addNewStu, id: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            typt="text"
            name="email"
            placeholder="Enter email"
            id="email"
            className="border-black border-2 m-2"
            value={addNewStu.email}
            onChange={(e) => {
              setAddNewStu({ ...addNewStu, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            typt="text"
            name="body"
            placeholder="Enter student "
            id="student"
            className="border-black border-2 m-2"
            value={addNewStu.body}
            onChange={(e) => {
              setAddNewStu({ ...addNewStu, body: e.target.value });
            }}
          />
        </div>
        <div>
          <button
            className="bg-green-500 text-black px-3 py-3"
            onClick={() => {
              handleUpdateNewStudentData();
            }}
          >
            Add New Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewStudent;
