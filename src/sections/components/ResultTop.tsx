import { FaPlay } from "react-icons/fa"

function ResultTop({ word, phonetic }: { word: string | undefined, phonetic: string | undefined }) {
  return (
    <section className="result-main flex items-center">
      <div>
        <h1 className="font-black text-5xl">{word}</h1>
        <p className="mt-[14px] text-primary font-semibold">{phonetic}</p>
      </div>
      <button className="ml-auto">
        <div className="w-[60px] h-[60px] bg-[#3c91e696]  rounded-full flex justify-center items-center cursor-pointer">
          <FaPlay size={20} className="ml-[3px] text-primary opacity-100 z-10" />
        </div>
      </button>
    </section>
  )
}

export default ResultTop