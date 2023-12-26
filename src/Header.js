import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { searchStudents } from "./store/studentSlice";

const Header = () => {
  let [search, setSearch] = useState("");
  let student = useSelector((state) => state.studentData);
  let dispatch = useDispatch();
  const handleSearchData = () => {
    let searchStudent = student.Data.filter((stu) => {
      if (stu.id == search) {
        return true;
      }
      return false;
    });
    let searchs = {
      searchstudent: searchStudent,
    };
    dispatch(searchStudents(searchs));
  };
  return (
    <>
      <div className=" bg-black text-white flex justify-around  font-serif font-bold fixed w-full">
        <div className="">
          <ul className="flex"></ul>
        </div>
        <div className="serach">
          <input
            type="text"
            placeholder="serach"
            className="p-4 mr-4 text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="hover:bg-red-600 p-5"
            onClick={() => {
              handleSearchData();
            }}
          >
            serach
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Header;
