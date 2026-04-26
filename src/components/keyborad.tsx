import clsx from "clsx";

type KeyboardProps = {
  alphabet: string;
  guessLetter: string[];
  currentWord: string;
  isGameOver: boolean;
  getGuessedLetter: (key: string) => void;
};

export default function Keyboard({
  alphabet,
  guessLetter,
  currentWord,
  isGameOver,
  getGuessedLetter,
}: KeyboardProps) {
  const keyboardElements = alphabet.split("").map((letters) => {
    const isGuessed = guessLetter.includes(letters);
    const isCorrect = isGuessed && currentWord.includes(letters);
    const isWrong = isGuessed && !currentWord.includes(letters);
    const className = clsx({
      keyboard: !isGuessed,
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        disabled={isGameOver}
        aria-disabled={guessLetter.includes(letters)}
        aria-label={`letter ${letters}`}
        key={letters}
        className={className}
        onClick={() => getGuessedLetter(letters)}
      >
        {letters.toLocaleUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-section">{keyboardElements}</section>;
}
