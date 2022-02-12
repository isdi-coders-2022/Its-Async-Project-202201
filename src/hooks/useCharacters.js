import { useCallback, useContext } from "react";
import {
  addCharacter,
  loadCharacters,
  deleteCharacter,
  filterHumans,
  filterAliens,
  filterAlive,
} from "../store/actions/characters/actionsCreators";
import CharacterContext from "../store/contexts/CharacterContext";

const useCharacters = () => {
  const apiURL = `${process.env.REACT_APP_URLAPI}`;
  const apiLocalUrl = `${process.env.REACT_APP_URLAPILOCAL}`;
  const { dispatch } = useContext(CharacterContext);

  const loadCharactersAPI = useCallback(
    async (page) => {
      const response = !page
        ? await fetch(apiURL)
        : await fetch(`${apiURL}/?page=${page}`);

      const characters = await response.json();
      dispatch(loadCharacters(characters.results));
    },
    [dispatch, apiURL]
  );

  const loadFilteredHumansAPI = useCallback(
    async (page) => {
      const response = !page
        ? await fetch(apiURL)
        : await fetch(`${apiURL}/?page=${page}`);

      const characters = await response.json();
      dispatch(filterHumans(characters.results));
    },
    [dispatch, apiURL]
  );

  const loadFilteredAliensAPI = useCallback(
    async (page) => {
      const response = !page
        ? await fetch(apiURL)
        : await fetch(`${apiURL}/?page=${page}`);

      const characters = await response.json();
      dispatch(filterAliens(characters.results));
    },
    [dispatch, apiURL]
  );

  const loadFilteredAliveAPI = useCallback(
    async (page) => {
      const response = !page
        ? await fetch(apiURL)
        : await fetch(`${apiURL}/?page=${page}`);

      const characters = await response.json();
      dispatch(filterAlive(characters.results));
    },
    [dispatch, apiURL]
  );

  const loadCharactersLocalAPI = useCallback(async () => {
    const response = await fetch(apiLocalUrl);
    const myCharacters = await response.json();
    dispatch(loadCharacters(myCharacters));
  }, [dispatch, apiLocalUrl]);

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
    const response = await fetch(`${apiLocalUrl}/${id}`, {
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
    loadFilteredHumansAPI,
    loadFilteredAliensAPI,
    loadFilteredAliveAPI,
    loadCharactersLocalAPI,
    loadCharacterDetailsAPI,
    addCharactersAPI,
    deleteCharacterAPI,
  };
};

export default useCharacters;
