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
    if (winner) {
      setStatus("Winner Is: " + winner);
      return;
    } else setStatus("Current Player: " + (xIsNext ? "X" : "O"));
    if (allCells.every((i) => i)) setStatus("Draw");
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {allCells.map((i, index) => {
          return (
            <Cell
              value={i}
              onClick={handleClick.bind(null, index)}
              key={index}
            />
          );
        })}
      </div>
      <Reset setAllCells={setAllCells} setXIsNext={setXIsNext} />
    </div>
  );
}
