import React from "react";
import ReactDOM from "react-dom";
import "../style.css";
import heart from "../assets/heart.svg";
import star from "../assets/star.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="data">
        <p>{props.name}</p>
        <div className="right-side-data">
          <img src={heart} />
          <img src={star} />
          <span>{props.rating}</span>
        </div>
      </div>
    </div>
  );
}
