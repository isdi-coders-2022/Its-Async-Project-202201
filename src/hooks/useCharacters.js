import { useCallback, useContext } from "react";
import {
  addCharacter,
  loadCharacters,
  deleteCharacter,
} from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = "https://rickandmortyapi.com/api/character/";
  const apiLocalUrl = "https://rick-and-morty-isdi.herokuapp.com/characters";
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

  const loadCharactersLocalAPI = useCallback(async () => {
    const response = await fetch(apiLocalUrl);
    const myCharacters = await response.json();
    dispatch(loadCharacters(myCharacters));
  }, [dispatch]);

  const loadCharacterDetailsAPI = useCallback(
    async (id) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const detailedCharacter = await response.json();
      dispatch(loadCharacters([detailedCharacter]));
    },
    [dispatch]
  );

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
    loadCharactersLocalAPI,
    loadCharacterDetailsAPI,
    addCharactersAPI,
    deleteCharacterAPI,
  };
};

export default useCharacters;
