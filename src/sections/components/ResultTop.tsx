import { FaPlay } from "react-icons/fa";

function ResultTop({
  word,
  phonetic,
  audio,
}: {
  word: string | undefined;
  phonetic: string | undefined;
  audio: string | undefined;
}) {
  function playAudio(url: string | undefined) {
    new Audio(url).play();
  }

  return (
    <section className="result-main flex items-center">
      <div>
        <h1 className="text-5xl font-black">{word}</h1>
        <p className="mt-[14px] font-semibold text-primary">{phonetic}</p>
      </div>
      <button className="btn-audio ml-auto" onClick={() => playAudio(audio)}>
        <div className="flex h-[60px] w-[60px]  cursor-pointer items-center justify-center rounded-full bg-[#3c91e696] transition-all duration-200 ease-in-out hover:border-[5px] hover:border-secondary ">
          <FaPlay
            size={20}
            className="z-10 ml-[3px] text-primary opacity-100"
          />
        </div>
      </button>
    </section>
  );
}

export default ResultTop;
