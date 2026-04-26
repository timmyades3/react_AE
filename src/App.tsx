import { languages } from "./languages.ts";
import React from "react";
import { getWord } from "./utils.ts";
import ConfettiContainer from "./components/confettiContainer.tsx";
import Header from "./components/header.tsx";
import GameStatus from "./components/GameStatus.tsx";
import AriaLiveStatus from "./components/AriaLiveStatus.tsx";
import LanguageChip from "./components/LanguageChip.tsx";
import WordLetter from "./components/WordLetters.tsx";
import Keyboard from "./components/keyborad.tsx";
import NewGameButton from "./components/NewGameButton.tsx";

export default function App() {
  const [currentWord, setcurrentWord] = React.useState<string>(() => getWord());
  const [guessLetter, setGuessLetter] = React.useState<string[]>([]);
  // derived values
  const wrongGuessCount: number = guessLetter.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const isGameWon: boolean = currentWord
    .split("")
    .every((letter) => guessLetter.includes(letter));
  const isGameLost: boolean = wrongGuessCount >= 8;
  const isGameOver: boolean = isGameWon || isGameLost;
  const numGuessesLeft: number = languages.length;
  const lastGuessedLetter: string = guessLetter[guessLetter.length - 1];

  // static value
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function newWord(): void {
    setcurrentWord(getWord());
    setGuessLetter([]);
  }

  function getGuessedLetter(key: string): void {
    setGuessLetter((prev: string[]): string[] =>
      // {
      //   const keySet = new Set(prev)
      //   keySet.add(key)
      //   return Array.from(keySet)
      // }
      prev.includes(key) ? prev : [...prev, key],
    );
  }

  return (
    <>
      <main>
        <ConfettiContainer isGameWon={isGameWon} />
        <Header />
        <GameStatus
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isGameOver={isGameOver}
          wrongGuessCount={wrongGuessCount}
        />
        <LanguageChip languages={languages} wrongGuessCount={wrongGuessCount} />
        <WordLetter
          currentWord={currentWord}
          isGameLost={isGameLost}
          guessLetter={guessLetter}
        />
        {/* screen reader only  */}
        <AriaLiveStatus
          currentWord={currentWord}
          lastGuessedLetter={lastGuessedLetter}
          numGuessesLeft={numGuessesLeft}
          guessLetter={guessLetter}
        />

        <Keyboard
          alphabet={alphabet}
          guessLetter={guessLetter}
          currentWord={currentWord}
          isGameOver={isGameOver}
          getGuessedLetter={getGuessedLetter}
        />
        <NewGameButton isGameOver={isGameOver} newWord={newWord} />
      </main>
    </>
  );
}
