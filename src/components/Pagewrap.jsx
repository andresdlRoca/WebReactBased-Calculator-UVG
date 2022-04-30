import React from "react";
import backgroundIMG from "../assets/background.jpg";
import Calculator from "./Calculator";
import './styles/Pagewrap.css';

export default function Pagewrap() {
    return (
      <div className="page-wrap" style={{ backgroundImage: `url(${backgroundIMG})`}} >
        <Calculator />
      </div>
  
    );
  }