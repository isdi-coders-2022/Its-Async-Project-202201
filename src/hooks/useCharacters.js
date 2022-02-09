import { useCallback, useContext } from "react";
import { loadCharacters } from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const { dispatch } = useContext(CharacterContext);

  const loadCharactersAPI = useCallback(
    async (page) => {
      const response = !page
        ? await fetch(apiURL)
        : await fetch(`${apiURL}/?page=${page}`);

      const characters = await response.json();
      dispatch(loadCharacters(characters.results));
    },
    [dispatch]
  );

  return {
    loadCharactersAPI,
  };
};

export default useCharacters;
