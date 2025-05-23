import { useState } from "react";

function Square() {
  const [value, setvalue] = useState("");

  function handleClick() {
    setvalue("X");
  }

  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 border-solid border-2 border-black font-bold text-xl"
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="flex flex-wrap items-center justify-center h-[108px] w-[108px]">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
