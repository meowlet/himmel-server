import { useState } from "react";

function Square({ value, onSquareClick }: { value: any; onSquareClick: any }) {
  return <button onClick={onSquareClick}>{value}</button>;
}
async function getData() {
  const res = await fetch("http://localhost:3000/api/fiction/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Fictions() {
  const data = (await getData()) as Array<any>;
  console.log(data);
  return (
    <div>
      {data.map((fiction) => {
        return (
          <Fiction
            title={fiction.title}
            author={fiction.author}
            desc={fiction.description}
            content={fiction.content}
            status={fiction.status}
            key={fiction._id}
          ></Fiction>
        );
      })}
    </div>
  );
}

export function Fiction({ title, author, desc, content, status }) {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{desc}</div>
      <div>{content}</div>
      <div>{status}</div>
    </div>
  );
}

// export function Fictions() {
//   return (
//     <div>
//       <Fiction></Fiction>
//     </div>
//   );
// }

export function Squares() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const currentSquare = squares[squares.length - 1];

  const [xTurn, setXTurn] = useState(true);

  function squareClick(index: number) {
    if (squares[index]) return;
    const nextSquares = squares.slice();
    nextSquares[index] = xTurn ? "x" : "o";
    setXTurn(!xTurn);
    setSquares(nextSquares);
  }

  function timeTravel(turn: number) {}

  console.log(squares);

  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={() => squareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => squareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => squareClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => squareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => squareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => squareClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => squareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => squareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => squareClick(8)} />
      </div>
      <div>Current player: {xTurn ? "x" : "o"}</div>
    </>
  );
}
