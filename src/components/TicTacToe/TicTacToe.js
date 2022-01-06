import { useEffect, useState } from "react";
import { Cell } from "../Cell/Cell";
import { calculateWinner } from "../../helpers/calculateWinner.helper";
import { Reset } from "../Reset/Reset";
import classesForGame from "./TicTacToe.module.css";

export function TicTacToe() {
  const [allCells, setAllCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Current Player:  X");

  useEffect(() => {
    const winner = calculateWinner(allCells);
    if (winner) setStatus("Winner Is: " + winner);
    else setStatus("Current Player: " + (xIsNext ? "X" : "O"));
  }, [xIsNext, allCells]);

  const handleClick = (i) => {
    const newAllCells = [...allCells];
    if (calculateWinner(newAllCells) || newAllCells[i]) return;
    newAllCells[i] = xIsNext ? "X" : "O";
    setAllCells(newAllCells);
    setXIsNext(!xIsNext);

    return;
  };

  return (
    <div className={classesForGame.game}>
      <h2>{status}</h2>
      <div>
        <div style={{ display: "flex" }}>
          <Cell value={allCells[0]} onClick={handleClick.bind(this, 0)} />
          <Cell value={allCells[1]} onClick={handleClick.bind(this, 1)} />
          <Cell value={allCells[2]} onClick={handleClick.bind(this, 2)} />
        </div>
        <div style={{ display: "flex" }}>
          <Cell value={allCells[3]} onClick={handleClick.bind(this, 3)} />
          <Cell value={allCells[4]} onClick={handleClick.bind(this, 4)} />
          <Cell value={allCells[5]} onClick={handleClick.bind(this, 5)} />
        </div>
        <div style={{ display: "flex" }}>
          <Cell value={allCells[6]} onClick={handleClick.bind(this, 6)} />
          <Cell value={allCells[7]} onClick={handleClick.bind(this, 7)} />
          <Cell value={allCells[8]} onClick={handleClick.bind(this, 8)} />
        </div>
      </div>
      <Reset setAllCells={setAllCells} setXIsNext={setXIsNext} />
    </div>
  );
}
