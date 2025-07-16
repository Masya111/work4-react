import { useState } from "react";
import GameField from "./GameField";
import Player from "./Player";
import GameOver from "./GameOver";
export default function Game() {
  function getField() {
    return [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
  }
  const [gameField, setGameField] = useState(() => getField());
  const [guessList, setGuessList] = useState([]);
  const [winner, setWinner] = useState("");
  const turn = guessList.length % 2 == 0;

  function checkNumber(number) {
    return guessList.includes(number);
  }

  function startOver() {
    setGameField(() => getField());
    setGuessList([]);
    setWinner("");
  }

  return (
    <div className="task">
      {winner ? (
        <GameOver winner={winner} startOver={startOver} />
      ) : (
        <div>
          <div>
            <GameField
              gameField={gameField}
              guessList={guessList}
              checkNumber={checkNumber}
            />
            <div className="players">
              <Player
                name={"Ivan"}
                setGuessList={setGuessList}
                guessList={guessList}
                setWinner={setWinner}
                gameField={gameField}
                turn={turn}
              />
              <Player
                name="Petro"
                setGuessList={setGuessList}
                guessList={guessList}
                setWinner={setWinner}
                gameField={gameField}
                turn={!turn}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
