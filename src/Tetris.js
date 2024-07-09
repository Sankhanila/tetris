// src/Tetris.js

import React from "react";
import Stage from "./components/Stage";
import Display from "./components/Display";
import StartButton from "./components/StartButton";
import { useStage } from "./utils/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = React.useState(null);
  const [gameOver, setGameOver] = React.useState(false);
  const [pause, setPause] = React.useState(false);

  // Destructuring values from useStage hook
  const [player, updatePlayerPos, resetPlayer, playerRotate, sweepRows] =
    useStage(dropTime, setGameOver, setPause);

  // Example function for starting the game
  const startGame = () => {
    // Start game logic
  };

  // Example function for handling player movement
  const movePlayer = (dir) => {
    // Move player logic
  };

  // Example variables for display (replace with actual game logic)
  const score = 0;
  const rows = 0;
  const level = 1;

  return (
    <div className="Tetris">
      <Stage stage={Stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <div>
            <Display text={`Score: ${score}`} />
            <Display text={`Rows: ${rows}`} />
            <Display text={`Level: ${level}`} />
            <StartButton callback={startGame} />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Tetris;
