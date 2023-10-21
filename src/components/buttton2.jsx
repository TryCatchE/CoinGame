import "../App.scss";
import React, { useState } from "react";
export default function Button(props) {
  const { color, id } = props.data;

  return (
    <button onClick={props.onClick} className={props.className}>
      {props.i}2
    </button>
  );
}
