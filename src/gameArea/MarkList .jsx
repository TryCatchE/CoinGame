// MarkList.jsx
import React from "react";
import Button from "../components/button"; // Import your Button component here
import styles from "./index.scss";
import clsx from "clsx";
const MarkList = ({ marks, onMarkClick }) => {
  return (
    <div className={styles.renderedMarks}>
      {marks.reverse().map((e) => (
        <Button
          key={e.id}
          data={e}
          length={marks.filter((m) => m.owner !== 1 && m.owner !== 2).length}
          className={clsx(styles.bigMark, e.clicked && styles.hideMark)}
          onClick={() => onMarkClick(e.id)}
        />
      ))}
    </div>
  );
};

export default MarkList;
