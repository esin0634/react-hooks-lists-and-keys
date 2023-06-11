import React from "react";
import {nanoid} from "nanoid";

function ColorList({esin}) {
  console.log(
    nanoid()
  )

  const colorElements = esin.map((color) => {
    return <li key={nanoid()} style={{color : color}} > {color} </li>
  } )

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
