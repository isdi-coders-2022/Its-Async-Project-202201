import { useCallback, useContext } from "react";
import {
  loadCharacters,
  deleteCharacter,
} from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const apiLocalUrl = "https://rick-and-morty-isdi.herokuapp.com/characters";
  const { dispatch } = useContext(CharacterContext);

  const loadCharactersAPI = useCallback(async () => {
    const response = await fetch(apiURL);
    const characters = await response.json();
    dispatch(loadCharacters(characters.results));
  }, [dispatch]);

  const deleteCharacterAPI = async (id) => {
    const response = await fetch(`${apiLocalUrl}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteCharacter(id));
    } else {
      throw new Error();
    }
  };
  return {
    loadCharactersAPI,
    deleteCharacterAPI,
  };
};

export default useCharacters;
