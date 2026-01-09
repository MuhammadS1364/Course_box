import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './Components/Home'
import CourseList from './Components/CoursesList'
import AddCourse from './Components/AddCourses'

export default function App(){
  return (
  <nav>
    <Routes>
      <Route path='/' element = { <Home/>} />
      <Route path='/addCourse' element ={<AddCourse/>}/>
      <Route path='/courseList' element = {<CourseList/>}/>
    </Routes>
  </nav>
  );
}