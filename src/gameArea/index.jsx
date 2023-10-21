import styles from "./index.scss";
import React, { useState } from "react";
import randomPickedMark from "../customHooks/randomPickedMark.jsx";
import idPickedMark from "../customHooks/idPickedMark.jsx";
import Index from "../introPage/index.jsx";
import Button from "../components/button.jsx";
import clsx from "clsx";
import EndGameOverlay from "../components/endGame/index.jsx";
import CamelsView from "../components/endGame/camelsView"
import AvailableMarksSection from "./AvailableMarksSection";
import {
    goldCoins,
    silverCoins,
    redCoins,
    greenCoins,
    purpleCoins,
    brownCoins,
    cards3,
    cards4,
    cards5,
    camel
} from "../data/data.js";


// https://www.figma.com/file/0j9reT0kTBbHhaQjX8apxD/Untitled?type=design&node-id=402-17870&mode=design&t=ImMrs8EOG9dAgBsF-0

export default function App() {
    const [player, setPlayer] = useState(1);
    const [endGame, setEndGame] = useState(false);
    const [player1TotalPoints, setPlayer1TotalPoints] = useState(0);
    const [player2TotalPoints, setPlayer2TotalPoints] = useState(0);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const player1 = () => {
        setPlayer(1);
    };

    const player2 = () => {
        setPlayer(2);
    };


    const {
        getRandomMark: getRandomMark3,
        releaseRandomMark: releaseRandomMark3,
        player1Markers: player1card3Marks,
        player2Markers: player2card3Marks,
        randomMarks:randomCards3,
        newGame: resetRandomMark3
    } = randomPickedMark(cards3, player);


    const {
        getRandomMark: getRandomMark4,
        releaseRandomMark: releaseRandomMark4,
        player1Markers: player1card4Marks,
        player2Markers: player2card4Marks,
        randomMarks:randomCards4,
        newGame: resetRandomMark4
    } = randomPickedMark(cards4, player);
    const {
        getRandomMark: getRandomMark5,
        releaseRandomMark: releaseRandomMark5,
        player1Markers: player1card5Marks,
        player2Markers: player2card5Marks,
        randomMarks:randomCards5,
        newGame: resetRandomMark5
    } = randomPickedMark(cards5, player);


    const {
        getMarkById: getGold,
        releaseMarkbyId: releaseGold,
        player1Markers: player1GoldMarks,
        player2Markers: player2GoldMarks,
        newGame: resetGold,
        score1: player1GoldOwned,
        score2: player2GoldOwned,
        marks: goldMarks,
        haveEnded: goldMarksEnded,
        // score: scoreGold
    } = idPickedMark(goldCoins, player);

    const {
        getMarkById: getSilver,
        releaseMarkbyId: releaseSilver,
        player1Markers: player1silverMarks,
        player2Markers: player2silverMarks,
        newGame: resetSilver,
        marks: silverMarks,
        haveEnded: silverMarksEnded,
        // score: scoreSilver
    } = idPickedMark(silverCoins, player);
    const {
        getMarkById: getRed,
        releaseMarkbyId: releaseRed,
        player1Markers: player1redMarks,
        player2Markers: player2redMarks,
        newGame: resetRed,
        marks: redMarks,
        haveEnded: redMarksEnded,
        // score: scoreRed
    } = idPickedMark(redCoins, player);
    const {
        getMarkById: getBrown,
        releaseMarkbyId: releaseBrown,
        player1Markers: player1brownMarks,
        player2Markers: player2brownMarks,
        newGame: resetBrown,
        marks: brownMarks,
        haveEnded: brownMarksEnded,
        // score: scoreBrown
    } = idPickedMark(brownCoins, player);
    const {
        getMarkById: getGreen,
        releaseMarkbyId: releaseGreen,
        player1Markers: player1greenMarks,
        player2Markers: player2greenMarks,
        newGame: resetGreen,
        marks: greenMarks,
        haveEnded: greenMarksEnded,
        // score: scoreGreen
    } = idPickedMark(greenCoins, player);
    const {
        getMarkById: getPurple,
        releaseMarkbyId: releasePurple,
        player1Markers: player1purpleMarks,
        player2Markers: player2purpleMarks,
        newGame: resetPurple,
        marks: purpleMarks,
        haveEnded: purpleMarksEnded,
        // score: scorePurple
    } = idPickedMark(purpleCoins, player);



    const handleRadioChange = (e) => {
        setSelectedPlayer(e.target.value);
    };

    const openLastScreen = () => {

        selectedPlayer

        const allMarkArrays = [
            player1card4Marks,
            player2card4Marks,
            player1card5Marks,
            player2card5Marks,
            player1GoldMarks,
            player2GoldMarks,
            player1silverMarks,
            player2silverMarks,
            player1redMarks,
            player2redMarks,
            player1brownMarks,
            player2brownMarks,
            player1greenMarks,
            player2greenMarks,
            player1purpleMarks,
            player2purpleMarks
        ];

        const calculateTotalVictoryPoints = (marks) => {
            return marks.reduce((totalVictoryPoints, mark) => totalVictoryPoints + mark.victoryPoints, 0);
        };

        const player1TotalVictoryPoints = [];
        const player2TotalVictoryPoints = [];

        allMarkArrays.forEach(markArray => {
            const player1Filtered = markArray.filter(mark => mark.owner === 1);
            const player2Filtered = markArray.filter(mark => mark.owner === 2);

            const player1Points = calculateTotalVictoryPoints(player1Filtered);
            const player2Points = calculateTotalVictoryPoints(player2Filtered);

            player1TotalVictoryPoints.push(player1Points);
            player2TotalVictoryPoints.push(player2Points);
        });
        const player1Total = player1TotalVictoryPoints.reduce((sum, points) => sum + points, 0);
        const player2Total = player2TotalVictoryPoints.reduce((sum, points) => sum + points, 0);


        // if (selectedPlayer === "1") {
        //     const updatedPlayer1Total = player1Total + 5;
        //     console.log(player1Total, updatedPlayer1Total)
        //     setPlayer1TotalPoints(updatedPlayer1Total);
        // } else if (selectedPlayer === "2") {
        //     const updatedPlayer2Total = player2Total + 5;
        //     setPlayer2TotalPoints(updatedPlayer2Total);
        // }

        setPlayer1TotalPoints(player1Total);
        setPlayer2TotalPoints(player2Total);
        setEndGame(true);
    };


    const newGame = () => {
        resetRandomMark3();
        resetRandomMark4();
        resetRandomMark5();
        resetGold();
        resetSilver();
        resetRed();
        resetBrown();
        resetGreen();
        resetPurple();
        setEndGame(false);
    }


    return (
        <div className={styles.gameArea}>

            <CamelsView 
                purpleMarksEnded={purpleMarksEnded} 
                greenMarksEnded={greenMarksEnded } 
                brownMarksEnded={brownMarksEnded }  
                redMarksEnded={redMarksEnded } 
                silverMarksEnded={silverMarksEnded } 
                goldMarksEnded={goldMarksEnded }
                handleRadioChange={handleRadioChange}
                selectedPlayer={selectedPlayer}
                openLastScreen={openLastScreen}
            />

            {endGame && <EndGameOverlay player1Points={player1TotalPoints} player2Points={player2TotalPoints} onClick={newGame} />}

            <div className={styles.playersCnt}>

                <div className={styles.main}>
                    {/* player1 area with marks  */}
                    <div className={styles.playerHeader} onClick={player1}>player1</div>

                    <div className={styles.marksOwned}>
                        <div className={clsx(styles.ownedArea, styles.blue, player == 1 && styles.activePlayer1)}>

                            <div className={styles.ownedMarkCnt}>


                                {player1redMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1redMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1redMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseRed}
                                            ></Button>
                                        ))}
                                    </div>
                                )}

                                {player1GoldMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1GoldMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1GoldMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseGold}
                                            ></Button>
                                        ))}
                                    </div>
                                )}

                                {player1silverMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1silverMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1silverMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseSilver}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1brownMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1brownMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1brownMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseBrown}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1greenMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1greenMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1greenMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseGreen}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1purpleMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1purpleMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1purpleMarks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1card3Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1card3Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1card3Marks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releaseRandomMark3}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1card4Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1card4Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1card4Marks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player1card5Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player1card5Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player1card5Marks.filter(e => e.owner == 1).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.main}>

                    <div className={clsx(styles.playerHeader, styles.purple)} onClick={player2}>player2</div>
                    {/* player2 area with marks  */}
                    <div className={styles.marksOwned}>
                        <div className={clsx(styles.ownedArea, styles.purple, player == 2 && styles.activePlayer2)}>


                            <div className={styles.ownedMarkCnt}>

                                {player2redMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2redMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2redMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseRed}
                                            ></Button>
                                        ))}
                                    </div>
                                )}

                                {player2GoldMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2GoldMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2GoldMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseGold}
                                            ></Button>
                                        ))}
                                    </div>
                                )}

                                {player2silverMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2silverMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2silverMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseSilver}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2brownMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2brownMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2brownMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseBrown}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2greenMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2greenMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2greenMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releaseGreen}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2purpleMarks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2purpleMarks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2purpleMarks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                                onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2card3Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2card3Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2card3Marks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2card4Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2card4Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2card4Marks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                                {player2card5Marks?.length > 0 && (
                                    <div className={styles.markCnt}>
                                        {player2card5Marks.reverse().map((e) => (
                                            <Button
                                                key={e.id}
                                                data={e}
                                                length={player2card5Marks.filter(e => e.owner == 2).length}
                                                className={clsx(styles.smallMark, e.clicked && styles.visible)}
                                            // onClick={releasePurple}
                                            ></Button>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <div className={styles.avaliableMarksCnt}>
                <AvailableMarksSection marks={redMarks} onMarkClick={getRed} />
                <AvailableMarksSection marks={goldMarks} onMarkClick={getGold} />
                <AvailableMarksSection marks={silverMarks} onMarkClick={getSilver} />
                <AvailableMarksSection marks={brownMarks} onMarkClick={getBrown} />
                <AvailableMarksSection marks={greenMarks} onMarkClick={getGreen} />
                <AvailableMarksSection marks={purpleMarks} onMarkClick={getPurple} />
                <AvailableMarksSection marks={randomCards3 } onMarkClick={getRandomMark3} />
                <AvailableMarksSection marks={randomCards4 } onMarkClick={getRandomMark4} />
                <AvailableMarksSection marks={randomCards5 } onMarkClick={getRandomMark5} />
            </div>


            <button onClick ={newGame} className={styles.newGameBtn}> New Game </button>

        </div>

    );
}
