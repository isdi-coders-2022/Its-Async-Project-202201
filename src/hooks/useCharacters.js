import { useCallback, useContext } from "react";
import {
  addCharacter,
  loadCharacters,
} from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const { dispatch } = useContext(CharacterContext);

  const loadCharactersAPI = useCallback(async () => {
    const response = await fetch(apiURL);
    const characters = await response.json();
    dispatch(loadCharacters(characters.results));

  }, [dispatch]);

  const addCharactersAPI = async (character) => {
    const response = await fetch(
      "https://rick-and-morty-isdi.herokuapp.com/characters/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(character),
      }
    );
    const newCharacter = await response.json();
    dispatch(addCharacter(newCharacter));
  };

  return {
    loadCharactersAPI,
    addCharactersAPI,
  };
};

export default useCharacters;
