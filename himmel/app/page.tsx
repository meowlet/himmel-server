"use client";
import { useState } from "react";
import Square from "./ui";
import Fiction from "./ui";

export default function Home() {
  const [count, setCount] = useState(0);
  function customValueButton(value: number) {
    setCount(value);
  }
  function handleClick(value: number) {
    setCount(value);
  }
  return (
    <div>
      <Fiction />
    </div>
  );
}
