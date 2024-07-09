// src/components/Stage.js

import React from "react";

const Stage = ({ stage }) => (
  <div>
    {stage.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <div key={cellIndex}>{cell}</div>
        ))}
      </div>
    ))}
  </div>
);

export default Stage;
