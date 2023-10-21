import React from 'react';
import styles from './index.scss';

const EndGameOverlay = (props) => {


    const {onClick, player1Points,player2Points} = props;
    return (
        <div className={styles.endGameOverlay}>
            <div className={styles.blurBackground}></div>

            <div className={styles.centeredDiv}>
                <div className={styles.text}>Game has ended</div>

                <div className={styles.playersCnt}>
                    <div className={styles.player1}>Player 1 : {player1Points} Points</div>
                    <div className={styles.player2}>Player 2 : {player2Points} Points</div>
                </div>


                <button onClick={onClick} className={styles.newGameBtn}> Start New Game !</button>
            </div>

        </div>
    );
};

export default EndGameOverlay;
