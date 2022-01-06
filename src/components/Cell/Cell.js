import classesForCell from "./Cell.module.css";

export function Cell({ value, onClick }) {
  return (
    <div className={classesForCell.cell} onClick={onClick}>
      {value}
    </div>
  );
}
