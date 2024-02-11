// EVERY TYPE AND CONSTANT
export type T_handleSearch = {
  handleSearch: (query: string) => void
}

export type T_toggleTheme = {
  toggleTheme: () => void;
}

export interface T_dictionaryResponse {
  license: {
    name: string;
    url: string;
  } | "";
  meanings: {
    partOfSpeech: string,
    definitions: string[],
  }[];
  phonetic: string | "";
  phonetics: {
    audio: string | undefined | null,
  }[] | "";
  sourceUrls: string[] | "";
  word: string | "";
}

