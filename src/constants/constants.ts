// EVERY TYPE AND CONSTANT
export type T_handleSearch = {
  handleSearch: (query: string) => void
}

export type T_toggleTheme = {
  toggleTheme: () => void;
}

export interface T_dictionaryResponse {
  meanings: {
    partOfSpeech: string,
    definitions: string[],
  }[];
  phonetic: string | "";
  phonetics: {
    text: string | "",
    audio: string | "",
  }[];
  sourceUrls: string[] | "";
  word: string | "";
}

