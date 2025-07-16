export default function GameOver({ winner, startOver }) {
  return (
    <>
      <div className="game-over">
        <h1>Гру закінчено, переможець:{winner}</h1>
        <button onClick={() => startOver()}>Зіграти ще раз</button>
      </div>
    </>
  );
}
