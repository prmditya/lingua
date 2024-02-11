
function Verbs({ verbs }: { verbs: any | undefined }) {
  return (
    <section className="result-verb mt-[20px]">
      <div className="flex items-center">
        <h2 className="mr-[10px] italic font-bold text-lg">verb</h2>
        <div className="w-full h-[1px] bg-black dark:bg-white opacity-20"></div>
      </div>
      <section className="meaning my-[20px]">
        <h3 className="text-secondary mb-2">Meaning</h3>
        <ul className="list-disc ml-7">
          {verbs.map((verb: any) => (<li key={crypto.randomUUID()} className="mb-3">{verb.definition}</li>))}
        </ul>
      </section>
    </section>
  )
}

export default Verbs