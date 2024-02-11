function Nouns({ nouns }: { nouns: any | undefined }) {

  return (
    <section className="result-meaning mt-[20px]">
      <div className="flex items-center">
        <h2 className="mr-[10px] italic font-bold text-lg">noun</h2>
        <div className="w-full h-[1px] bg-black dark:bg-white opacity-20"></div>
      </div>
      <section className="meaning my-[20px]">
        <h3 className="text-secondary mb-2">Meaning</h3>
        <ul className="list-disc ml-7">
          {nouns.map((noun: any) => (<li key={crypto.randomUUID()} className="mb-3">{noun.definition}</li>))}
        </ul>
      </section>
    </section>
  )
}

export default Nouns