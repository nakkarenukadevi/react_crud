import { useEffect, useState } from "react";
import Child from "./child";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudentdata } from "./store/studentSlice";
import EditStudentdata from "./eidtStudent";
import AddNewStudent from "./addNewStudent";
const Body = () => {
  let { Data, searchs } = useSelector((state) => state.studentData);
  let initialStudent = searchs.searchstudent ? searchs.searchstudent : Data;
  useEffect(() => {
    getstudentData();
  }, []);
  // let [addNewsudent, setAddNewStudent] = useState(false);
  let dispatch = useDispatch();
  const getstudentData = async () => {
    let data = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    let json = await data.json();
    dispatch(addStudent(json));
  };
  let handelDeleteData = (id) => {
    let deleteStudent = Data.filter((stu) => {
      if (stu.id == id) {
        return false;
      }
      return true;
    });
    dispatch(deleteStudentdata(deleteStudent));
  };
  let [showAddNewStudent, setShowAddNewStudent] = useState(false);
  let handlAddNewStudent = () => {
    setShowAddNewStudent(true);
  };

  return (
    <div className="flex justify-center  font-mono ">
      <table className="border-2 w-1/2 mt-32">
        <thead className="border-2">
          <tr className="font-bold text-2xl">
            <td className="border-2 text-center p-5 border-black">S.No</td>

            <td className="border-2 text-center p-5 border-black">Name</td>

            <td className="border-2 text-center p-5 border-black">email</td>
            <td className="border-2 text-center p-5 border-black">student</td>
            <td className="border-2 text-center p-5 border-black">id</td>
            <td className="border-2 text-center p-5 border-black">Edit</td>
            <td className="border-2 text-center p-5 border-black">Delet</td>
            <td
              className="border-2 text-center p-5 border-black bg-green-700 text-white"
              onClick={() => {
                handlAddNewStudent();
              }}
            >
              Add New Student
            </td>
          </tr>
        </thead>
        <tbody>
          {initialStudent.map((stu, index) => {
            return (
              <Child
                stu={stu}
                key={stu.id}
                index={index}
                handelDeleteData={handelDeleteData}
              />
            );
          })}
        </tbody>
      </table>
      {showAddNewStudent ? (
        <AddNewStudent setShowAddStudent={setShowAddNewStudent} />
      ) : null}
    </div>
  );
};
export default Body;
