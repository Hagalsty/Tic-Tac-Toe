import classesForResetButton from "./Reset.module.css";

export function Reset({ setAllCells, setXIsNext }) {
  const handleClick = () => {
    setAllCells(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <button onClick={handleClick} className={classesForResetButton.reset}>
      Reset
    </button>
  );
}
