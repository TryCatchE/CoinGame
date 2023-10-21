import { useState, useEffect } from "react";

export default function App(initialMarks, player) {
  const [randomMarks, setRandomMarks] = useState(initialMarks);
  const [loggedIds, setLoggedIds] = useState([]);
  const [counter, setCounter] = useState(0);
  const [end, setEnd] = useState(false);
  const [score2, setScoreForPlayer2] = useState(0);
  const [score1, setScoreForPlayer1] = useState(0);
  const [clicked, setClicked] = useState([]);

  // change this logic  for outside the component
  const newGame = () => {
    const resetArray = randomMarks.map((e) => ({
      ...e,
      owner: null,
      clicked: false
    }));

    setRandomMarks(resetArray);
    setLoggedIds([]);
    setCounter(0);
  };

  //change this logic here to not be random
  const releaseRandomMark = (id) => {
    // console.log(id);
    if (loggedIds.length === 0) {
      return;
    }

    const updatedLoggedIds = [...loggedIds];

    console.log(updatedLoggedIds, "loggedIds");
    const findMark = randomMarks.find((e) => e.id === updatedLoggedIds.at(-1));
    // console.log(findMark);
    findMark.owner = null;
    findMark.clicked = false;

    updatedLoggedIds.pop();

    setCounter(counter - 1);
    setLoggedIds(updatedLoggedIds);
  };

  const getRandomMark = () => {
    const availableMarks = randomMarks.filter(
      (mark) => !loggedIds.includes(mark.id)
    );
    // console.log(availableMarks);

    if (availableMarks.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableMarks.length);
    const randomId = availableMarks[randomIndex].id;

    const updateMarks = randomMarks.find((e) => e.id === randomId);
    updateMarks.clicked = true;
    updateMarks.owner = player;

    const player1Points = randomMarks.filter((e) => e.owner === 1).reduce(
      (accumulator, currentValue) => accumulator + currentValue.points,
      0
    );
 
    
    const player2Points = randomMarks.filter((e) => e.owner === 2).reduce(
      (accumulator, currentValue) => accumulator + currentValue.points,
      0
    );
   


    setLoggedIds([...loggedIds, randomId]);
    setCounter(counter + 1);
    setRandomMarks([...randomMarks]);
    setScoreForPlayer1(player1Points);
    setScoreForPlayer2(player2Points);



  };

  // move this to common funcs
  const player2Markers = randomMarks?.filter((e) => e.owner === 2);
  const player1Markers = randomMarks?.filter((e) => e.owner === 1);

  const haveEnded =
    randomMarks?.filter((e) => e.owner === null).length > 0 ? true : false;

  return {
    getRandomMark,
    releaseRandomMark,
    newGame,
    counter,
    randomMarks,
    score1,
    score2,
    end,
    player1Markers,
    player2Markers,
    haveEnded
  };
}
