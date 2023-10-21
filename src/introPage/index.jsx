import React, { useState } from "react";
import styles from "./index.scss"

export default function Component() {
  const [showMessage, setShowMessage] = useState(false);
  const [players, setPlayers] = useState({
    firstPlayer: "",
    secondPlayer: ""
  });
  const [coin, setCoin] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;

    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [name]: value
    }));
  };

  const onClick = (e) => {
    if (players.firstPlayer !== "" && players.secondPlayer !== "") {
      setShowMessage(false);
      console.log(players.firstPlayer, players.secondPlayer);
    }

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const coinflip = () => {
    setCoin(true);
    setTimeout(() => {
      setCoin(false);
      // setChoosePlayer(true);
    }, 3000);
  };

  return (<>
    <form noValidate>
      <input
        type="text"
        name="firstPlayer"
        value={players.firstPlayer}
        onChange={onChange}
        placeholder="Enter name"
      />
      <input
        type="text"
        name="secondPlayer"
        value={players.secondPlayer}
        onChange={onChange}
        placeholder="Enter name"
      />
      <button type="button" onClick={onClick}>
        Save
      </button>
      {showMessage && <div>Both Names Must Be Entered</div>}
    </form>

    <button onClick={coinflip}>
      Coin Flip
      {coin ? (
        <div className={styles.coinflip}>
          <div className={styles.coinTails}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/United_States_penny%2C_reverse.jpg" alt="Tails" />
          </div>
          <div className={styles.coinHeads}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/240px-US_One_Cent_Obv.png" alt="Heads" />
          </div>
        </div>
      ) : (
        ""
      )}
    </button>
  </>

  );
}
