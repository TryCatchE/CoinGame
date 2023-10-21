import React, { useState } from "react";
import styles from "./index.scss";
export default function CamelsView(props) {

    const { selectedPlayer, handleRadioChange, openLastScreen, 
             purpleMarksEnded, greenMarksEnded, brownMarksEnded, redMarksEnded,
             silverMarksEnded, goldMarksEnded
         } = props;

    return (

        (!purpleMarksEnded ? 1 : 0) +
        (!greenMarksEnded ? 1 : 0) +
        (!brownMarksEnded ? 1 : 0) +
        (!redMarksEnded ? 1 : 0) +
        (!silverMarksEnded ? 1 : 0) +
        (!goldMarksEnded ? 1 : 0) === 4 && (
            <div className={styles.endGameOverlay}>
                <div className={styles.blurBackground}></div>

                <div className={styles.centeredDiv}>
                    <div className={styles.text}>
                        HOW HAS MORE CAMELS??
                    </div>
                    <label>
                        <input
                            type="radio"
                            name="player"
                            value="1"
                            checked={selectedPlayer === selectedPlayer}
                            onChange={handleRadioChange}
                        />
                        Player 1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="player"
                            value="2"
                            checked={selectedPlayer === "2"}
                            onChange={handleRadioChange}
                        />
                        Player 2
                    </label>
                    <button onClick={openLastScreen} className={styles.newGameBtn}>
                        Submit!
                    </button>
                </div>
            </div>
        )

    )
}