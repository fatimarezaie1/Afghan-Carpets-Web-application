import React from "react";
import ReactDOM  from "react-dom/client";
// import './style.css'
import Navbar from "./pages/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default function App(){
  return(
    <div className="container-fluid ">
       <Navbar />
    </div>
  )
}