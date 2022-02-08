import { useCallback, useContext } from "react";
import { loadCharacters } from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const { dispatch } = useContext(CharacterContext);

  const loadCharactersAPI = useCallback(async () => {
    const response = await fetch(apiURL);
    const character = await response.json();
    dispatch(loadCharacters(character));
  }, [dispatch]);

  return {
    loadCharactersAPI,
  };
};

export default useCharacters;
