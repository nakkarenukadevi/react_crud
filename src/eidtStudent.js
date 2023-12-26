import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSudentData } from "./store/studentSlice";
import x_icon from "../src/x_icon.jpg";
import { useNavigate } from "react-router-dom";

const EditStudentdata = (props) => {
  let sudent = useSelector((state) => state.studentData);

  let editstudetn = {};
  sudent.Data.find((stu) => {
    if (stu.id == props.id) {
      return (editstudetn = stu);
    }
  });
  let [editStu, setEditStu] = useState(editstudetn);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleUpdateData = () => {
    let editedData = sudent.Data.map((stu) => {
      if (stu.id == props.id) {
        return { ...stu, ...editStu };
      }
      return stu;
    });
    if (editStu.name && editStu.id && editStu.body && editStu.email != "") {
      dispatch(editSudentData(editedData));
      navigate("/");
    }
  };

  return (
    <div className="grid grid-cols-2  fixed top-56 w-1/2  font-bold bg-slate-400 p-5">
      <img
        src={x_icon}
        alt={x_icon}
        onClick={() => props.setShowEdit(false)}
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
            value={editStu.name}
            onChange={(e) => {
              setEditStu({ ...editStu, name: e.target.value });
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
            value={editStu.id}
            onChange={(e) => {
              setEditStu({ ...editStu, id: e.target.value });
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
            value={editStu.email}
            onChange={(e) => {
              setEditStu({ ...editStu, email: e.target.value });
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
            value={editStu.body}
            onChange={(e) => {
              setEditStu({ ...editStu, body: e.target.value });
            }}
          />
        </div>
        <div>
          <button
            className="bg-green-500 text-black px-3 py-3"
            onClick={() => {
              handleUpdateData();
            }}
          >
            up date Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudentdata;
