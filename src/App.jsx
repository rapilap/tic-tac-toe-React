import { useState } from "react";

function Square({ value, onSquareClick }) {
  // const [value, setvalue] = useState("");

  // function handleClick() {
  //   setvalue("X");
  // }

  return (
    <button
      onClick={onSquareClick}
      className="w-9 h-9 border-solid border-2 border-black font-bold text-xl"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // console.log(nextSquares);
    setSquare(nextSquares);
    setXTurn(!xTurn);
  }

  return (
    <div className="flex flex-wrap items-center justify-center h-[108px] w-[108px]">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  );
}
