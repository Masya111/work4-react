import { useEffect, useState } from "react";

export default function Player({
  name,
  setGuessList,
  guessList,
  gameField,
  setWinner,
  turn,
}) {
  const [guessedNumber, setGuessedNumber] = useState("");
  const [currentPlayerGuesses, setCurrentPlayerGuesses] = useState([]);

  function handleTurn() {
    if (guessedNumber >= 0 && guessedNumber < 10) {
      setGuessList((prev) => [...prev, guessedNumber]);
      setCurrentPlayerGuesses((prev) => [...prev, guessedNumber]);
    }
  }
  const isDisabled = guessList.includes(guessedNumber);

  useEffect(() => {
    if (
      gameField.every((elem) => guessList.includes(elem)) &&
      !guessList.includes(guessedNumber)
    ) {
      setWinner(name);
      setCurrentPlayerGuesses([]);
    }
    setGuessedNumber("");
  }, [guessList]);
  console.log(guessList);
  return (
    <>
      <div className={turn ? "player-inactive" : "player-active"}>
        <h2>{name}</h2>
        <p>
          Спроби учасника:{" "}
          {currentPlayerGuesses.map((num) => (
            <span className="guesses">{num}</span>
          ))}
        </p>
        <label>
          {" "}
          Цифра{" "}
          <input
            disabled={turn}
            type="number"
            max="9"
            min="0"
            value={guessedNumber}
            onChange={(e) => setGuessedNumber(Number(e.target.value))}
          ></input>
        </label>
        <button onClick={handleTurn} disabled={isDisabled || turn}>
          Зробити хід
        </button>
      </div>
    </>
  );
}
