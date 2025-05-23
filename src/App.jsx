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

function Over(squares) {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0];
    // const b = lines[i][1];
    // const c = lines[i][2];

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(i) {
    if (squares[i] || Over(squares)) return;

    const nextSquares = squares.slice();
    // if (xTurn) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // }

    nextSquares[i] = xTurn ? "X" : "O";
    // console.log(nextSquares);
    setSquare(nextSquares);
    setXTurn(!xTurn);
  }

  const winner = Over(squares);
  // console.log(winner);
  let status = "";
  if (winner) {
    status = `Player ${winner} wins!`;
  } else {
    status = `It's ${xTurn ? "X" : "O"}'s turn`;
  }

  return (
    <>
      <div className="mb-3">{status}</div>
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
    </>
  );
}
