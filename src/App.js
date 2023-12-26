import React, { useState } from "react";
import Header from "./Header";

import Contact from "./Contact";
import Body from "./Body";
import "./App.css";
import Product from "./Product";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Child from "./child";
import EditStudentdata from "./eidtStudent";

function App() {
  const [searchName, setSearchName] = useState("");

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Header handleSearchName={handleSearchName} />}
        >
          <Route path="/" element={<Body searchName={searchName} />}></Route>
          <Route path="/editstudent" element={<EditStudentdata />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/child" element={<Child />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
