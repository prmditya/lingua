function Nouns({ nouns }: { nouns: any | undefined }) {
  return (
    <section className="result-meaning mt-[20px]">
      <div className="flex items-center">
        <h2 className="mr-[10px] text-lg font-bold italic">noun</h2>
        <div className="h-[1px] w-full bg-black opacity-20 dark:bg-white"></div>
      </div>
      <section className="meaning my-[20px]">
        <h3 className="mb-2 text-secondary">Meaning</h3>
        <ul className="ml-7 list-disc">
          {nouns.map((noun: any) => (
            <li key={crypto.randomUUID()} className="mb-3">
              {noun.definition}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Nouns;
