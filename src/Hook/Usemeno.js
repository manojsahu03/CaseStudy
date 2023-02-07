import React, { useMemo, useState } from "react";
export default function Usemeno() {
  const [x, setNumber_x] = useState(20);
  const [y, setNumber_y] = useState(10);
  let newSubstraction = useMemo(
    function substraction() {
      console.log("subtraction of x-1 is rendering");
      return x - 1;
     },
       []
  );
  return (
    <div>
      <h1>New value of x after increment :{x}</h1>
      <h2>New value of y after multiplication :{y}</h2>
      <h3>New value of subtraction which depend on x: {newSubstraction}</h3>
      <button onClick={() => setNumber_x(x + 1)}>Increment</button>
      <button onClick={() => setNumber_y(y * 5 )}>Multiply</button>
    </div>
  );
}
