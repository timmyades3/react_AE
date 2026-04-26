import type { JSX } from "react";

type newGameButtonProps ={
    isGameOver:boolean
    newWord: () => void
}
export default function NewGameButton({ isGameOver, newWord }:newGameButtonProps):JSX.Element {
  return (
    <section className="new-game-section">
      {isGameOver ? (
        <button onClick={newWord} className="new-game-btn">
          New Game
        </button>
      ) : null}
    </section>
  );
}
