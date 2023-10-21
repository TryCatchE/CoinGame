import { useState, useEffect } from "react";

export default function App(initialMarks, player) {
  const [marks, setMarks] = useState(initialMarks);
  const [counter, setCounter] = useState(0);
  const [end, setEnd] = useState(false);
  const [score2, setScoreForPlayer2] = useState(0);
  const [score1, setScoreForPlayer1] = useState(0);

  // const resetArray = (array, setState) => {
  //   const resetArray = array.map((e) => ({
  //     ...e,
  //     owner: null,
  //     clicked: false
  //   }));

  //   setState(resetArray);
  // };

  // const newGame = () => {
  //   resetArray(marks, setMarks);
  //   resetArray(notRandom, setNotRandom);
  //   setLoggedIds([]);
  //   setCounter(0);
  // };

  //   todo implement this logic outside of the component
  const newGame = () => {
    const resetArray2 = marks.map((e) => ({
      ...e,
      owner: null,
      clicked: false
    }));

    setMarks(resetArray2);
    setCounter(0);
  };

  // test this better
  const releaseMarkbyId = (id) => {
    if (marks.length === 0) {
      return;
    }

    setMarks((prevmark) => {
      const updatedArray = prevmark.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            owner: null,
            clicked: false
          };
        }
        return item;
      });

      return updatedArray;
    });
  };


  const getMarkById = () => {
    const unclaimedMarkers = marks.filter((e) => e.owner === null);

    const sortedMarkers = unclaimedMarkers.sort((a, b) => a.id - b.id);

    if (sortedMarkers.length === 0) {
        return; 
    }

    const selectedMarker = sortedMarkers[0];

    selectedMarker.owner = player;
    selectedMarker.clicked = true;

    
    // const player1Points = marks.filter((e) => e.owner === 1).reduce(
    //   (accumulator, currentValue) => accumulator + currentValue.points,
    //   0
    // );
 
    
    // const player2Points = marks.filter((e) => e.owner === 2).reduce(
    //   (accumulator, currentValue) => accumulator + currentValue.points,
    //   0
    // );
   

    // setScoreForPlayer1(player1Points);
    // setScoreForPlayer2(player2Points);

    setMarks((prevMarks) =>
        prevMarks.map((e) => (e.id === selectedMarker.id ? selectedMarker : e))
    );
};

  const player2Markers = marks?.filter((e) => e.owner === 2);
  const player1Markers = marks?.filter((e) => e.owner === 1);

  const haveEnded = marks?.filter((e) => e.owner === null).length > 0 ? true : false;

  return {
    newGame,
    counter,
    score2,
    score1,
    getMarkById,
    marks,
    releaseMarkbyId,
    player1Markers,
    player2Markers,
    haveEnded
  };
}
