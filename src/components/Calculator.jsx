import React, { useState, useRef } from "react";
import "./styles/Calculator.css";
import startupgif from "../assets/startupgif.gif";


export default function Calculator() {
    return (
      <div className="CalculatorBody">
        <img src={startupgif} alt="Start Up" className="startupImg"/>
        <div className="overlayAesthethic"></div>
        <div className="stripe"></div>
        <div className="calculatorScreen">
          <p className="inputtedText" >012345678</p>
        </div>
        <div className="calculatorLayout">
          <div className="Clear key"><p>C</p></div>
          <div className="plusSlashminus key"><p>+/-</p></div>
          <div className="divide key"><p>÷</p></div>
          <div className="seven key"><p>7</p></div>
          <div className="eight key"><p>8</p></div>
          <div className="nine key"><p>9</p></div>
          <div className="multiplication key"><p>×</p></div>
          <div className="four key"><p>4</p></div>
          <div className="five key"><p>5</p></div>
          <div className="six key"><p>6</p></div>
          <div className="substraction key"><p>-</p></div>
          <div className="one key"><p>1</p></div>
          <div className="two key"><p>2</p></div>
          <div className="three key"><p>3</p></div>
          <div className="sum key"><p>+</p></div>
          <div className="zero key"><p>0</p></div>
          <div className="dot key"><p>.</p></div>
          <div className="equals key"><p>=</p></div>
        </div>
      </div>
  
    );
  }