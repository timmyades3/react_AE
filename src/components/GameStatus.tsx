import clsx from "clsx";
import { useMemo, type JSX } from "react";
import { getFarewellText } from "../utils";
import { languages } from "../languages";

type GameStatusProps ={
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  wrongGuessCount: number;
}

export default function GameStatus({
  isGameWon,
  isGameLost,
  isGameOver,
  wrongGuessCount,
}:GameStatusProps): JSX.Element {
  const getlang = useMemo(() => {
    if (wrongGuessCount >= 1) {
      return getFarewellText(languages[wrongGuessCount - 1].name);
    }
    return null;
  }, [wrongGuessCount]);

  const gameStatusClass:string = clsx("game-status", {
    game_won: isGameWon,
    game_lost: isGameLost,
  });

  function renderGameStatus() {
    if (!isGameOver) {
      return (
        <h2 className={getlang ? "farewellmessage" : undefined}>{getlang}</h2>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }

  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  );
}
