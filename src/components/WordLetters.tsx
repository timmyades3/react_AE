import clsx from "clsx"
import type { JSX } from "react"

type wordLetterProps={
    currentWord:string
    isGameLost:boolean
    guessLetter:string[]
}

export default function WordLetter({currentWord, isGameLost,guessLetter}:wordLetterProps):JSX.Element{
  const currentLetter:JSX.Element[] = currentWord.split("").map((letter:string, index:number):JSX.Element => {
    // const shown = guessLetter.includes(letter);
    const classname:string = clsx("letter", {
      not_hidden: true,
      missed_letter: isGameLost && !guessLetter.includes(letter),
    });
    const revealLetter:boolean = isGameLost || guessLetter.includes(letter);

    return (
      <span className={classname} key={index}>
        {revealLetter ? letter.toLocaleUpperCase() : ""}
      </span>
    );
  });
  return <section className="word-section">{currentLetter}</section>;
}
