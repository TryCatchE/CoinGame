import "../App.scss";
import React, { useState } from "react";
export default function Button(props) {
  const { color, id } = props.data;

  // console.log(props.data);

  return (
    <button className={props.className} onClick={() => props.onClick(id)}>
      {color}1
    </button>
  );
}
