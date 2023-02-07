// import logo from "./logo.svg";
// import { Edit } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import ExpenseItem from "./ComponentU/ExpenseItem";
// import Event from "./ComponentU/Event";
// import UseState from "./ComponentU/UseState";
// import Navbar from "./project/Navbar";
// import { Typography } from "@mui/material";
// import ResponsiveAppBar from "./project/ResponsiveAppBar";
// import About from "./project/About";
// import  "./project/About.css";
// import Register from "./project/Register";
// import { Routes, Route } from "react-router-dom";
// import Home from "./project/Home";
// import Child from "./PTC/Child";
// import Parent from "./PTC/Parent";
// import UseState from "./Hook/UseState";
// import UseStateObject from "./Hook/UseStateObject";
// import Usemeno from "./Hook/Usemeno"
// import Usecallbackparent from "./Hook/Usecallbackparent";
// import Home1 from "./lazyloading/Home1";
// // import LazyLoading from "./lazyloading/LazyLoading"
import Apitable from "./Crud/Apitable";
import Create from "./FakeApi/Create";
import Read from "./FakeApi/Read";
import UseEffect from "./practice/UseEffect";
import UseState from "./practice/UseState";
// import Edit from "./FakeApi/Edit";
import Car from "./ComponentA/Car";
import MyForm from "./ComponentA/MyForm";
import Logins from "./caseStudy/Logins";
import Register from "./caseStudy/Register";
import Child1 from "./practise/Child1";
import Parent1 from "./practise/Parent1";
import Parent2 from "./practise/Parent2";

import Userinfo from "./caseStudy/Userinfo";
import Usertab2 from "./caseStudy/Usertab2";
import MyHome from "./MyProject/MyHome"
import Edit from "./MyProject/Edit"

function App() {
  return (
    <div className="container">
      {/* <ResponsiveAppBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
       */}
     
      {/* <Routes>
        <Route path='/'element={<Read/>}></Route>
        <Route path='/create'element={<Create/>}></Route>
        <Route path='/edit'element={<Edit/>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Logins/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/usertab2" element={<Usertab2/>} />
        <Route path="/userinfo" element={<Route/>}/>
      </Routes>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter> */}

      
    </div>
  );
}

export default App;
