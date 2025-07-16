export default function GameField({ gameField, checkNumber }) {
  return (
    <>
      <div className="gamefield">
        <h3>Число</h3>
        <ul className="number">
          <li>{checkNumber(gameField[0]) && gameField[0]}</li>
          <li>{checkNumber(gameField[1]) && gameField[1]}</li>
          <li>{checkNumber(gameField[2]) && gameField[2]}</li>
        </ul>
      </div>
    </>
  );
}
