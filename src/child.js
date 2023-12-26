import React, { useState } from "react";
import EditStudentdata from "./eidtStudent";

const Child = (props) => {
  let handelDeleteData = props.handelDeleteData;

  let { postId, id, name, email, body } = props.stu;
  let [showEdit, setShowEdit] = useState(false);
  const handelEditdata = (id) => {
    setShowEdit(true);
  };
  return (
    <>
      <tr>
        <td className="border-2 text-center p-5 border-black">
          {props.index + 1}
        </td>

        <td className="border-2 text-center p-5 border-black">{name}</td>
        <td className="border-2 text-center p-5 border-black">{email}</td>
        <td className="border-2 text-center p-5 border-black">{body}</td>
        <td className="border-2 text-center p-5 border-black">{id}</td>

        <td
          className="border-2 text-center p-5 border-black text-blue-600 text-xl font-bold"
          onClick={() => handelEditdata(id)}
        >
          Edit
        </td>
        <td
          className="border-2 text-center p-5 border-black  text-red-500  text-xl font-bold"
          onClick={() => handelDeleteData(id)}
        >
          Delet
        </td>
        <td className="border-2 text-center p-5 border-black"></td>
      </tr>
      {showEdit ? <EditStudentdata id={id} setShowEdit={setShowEdit} /> : null}
    </>
  );
};
export default Child;
