// AvailableMarksSection.jsx
import React from "react";
import MarkList from "./MarkList ";
import styles from "./index.scss";
import clsx from "clsx";
const AvailableMarksSection = ({ marks, onMarkClick }) => {
  return (
    <div className={styles.avaliableMarksCnt}>
      {marks && <MarkList marks={marks} onMarkClick={onMarkClick} />}
    </div>
  );
};

export default AvailableMarksSection;
