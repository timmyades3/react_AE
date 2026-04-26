import type { JSX } from "react";
import type { Language } from "../languages";

type LanguageChipProps = {
  languages: Language[];
  wrongGuessCount: number;
};

export default function LanguageChip({
  languages,
  wrongGuessCount,
}: LanguageChipProps): JSX.Element {
    const languageElements: JSX.Element[] = languages.map((lang:Language, index:number):JSX.Element => {
    const styles:Omit<Language, "name"> = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span
        className={index < wrongGuessCount ? "chip lost" : "chip"}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });
  return <section className="language-chips">{languageElements}</section>;
}
