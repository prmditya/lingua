import { T_dictionaryResponse } from "../constants/constants";
import ResultTop from "./components/ResultTop";
import Nouns from "./components/Nouns";
import Verbs from "./components/Verbs";

function Result({
  dictionaryResponse,
}: {
  dictionaryResponse: T_dictionaryResponse | undefined;
}) {
  let nouns: any = dictionaryResponse?.meanings
    .find((meaning) => meaning.partOfSpeech === "noun")
    ?.definitions.slice(0, 3);
  let verbs: any = dictionaryResponse?.meanings
    .find((meaning) => meaning.partOfSpeech === "verb")
    ?.definitions.slice(0, 3);
  const phonetics: any = dictionaryResponse?.phonetics.find(
    (phonetic) => phonetic.audio !== undefined,
  );

  if (nouns === undefined) nouns = "";
  if (verbs === undefined) verbs = "";

  return (
    <section className="result dark:text-white">
      {dictionaryResponse?.word === undefined ? (
        <></>
      ) : (
        <ResultTop
          word={dictionaryResponse?.word}
          phonetic={dictionaryResponse?.phonetic}
          audio={phonetics.audio === undefined ? "" : phonetics.audio}
        />
      )}
      {nouns.length === 0 ? <></> : <Nouns nouns={nouns} />}
      {verbs.length === 0 ? <></> : <Verbs verbs={verbs} />}
    </section>
  );
}

export default Result;
