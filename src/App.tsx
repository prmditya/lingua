import axios from "axios";
import { useState, useEffect } from "react";
import { Header, Search, Result, Footer } from "./sections/sections";
import { T_dictionaryResponse } from "./constants/constants";

function App() {
  const [dictionaryResponse, setDictionaryResponse] =
    useState<T_dictionaryResponse>();

  async function handleSearch(query: string) {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
        responseType: "json",
      });

      setDictionaryResponse(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (dictionaryResponse?.phonetics[0].audio === "") {
      document.querySelector(".btn-audio")?.classList.add("hidden");
    } else {
      document.querySelector(".btn-audio")?.classList.remove("hidden");
    }
  }, [dictionaryResponse]);

  function toggleTheme() {
    document.querySelector("html")?.classList.toggle("dark");
    document.querySelector(".moon")?.classList.toggle("hidden");
    document.querySelector(".sun")?.classList.toggle("hidden");
  }

  return (
    <main className="m-auto max-w-[700px] px-[19px] py-[35px]">
      <Header toggleTheme={toggleTheme} />
      <Search handleSearch={handleSearch} />
      <Result dictionaryResponse={dictionaryResponse} />
      <Footer sourceUrls={dictionaryResponse?.sourceUrls[0]} />
    </main>
  );
}

export default App;
