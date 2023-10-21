import React from "react";
import styles from "./button.scss";
import { BASE_URL } from '../config.js';

export default function Button(props) {
  const { color, id, img } = props.data;
  return (
    <button className={props.className} onClick={props.onClick ? () => props.onClick(id) : null}>
      <small>{props.length}</small>
      <picture>
        <img className={styles.img} src={`${BASE_URL}/images/${img}`} alt={img} />
      </picture>
      {props.data.counter}
    </button>
  );
}
