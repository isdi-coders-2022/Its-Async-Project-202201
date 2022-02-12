import actionsTypes from "./actionTypes";

export const loadCharacters = (characters) => ({
  type: actionsTypes.loadCharacters,
  characters,
});

export const filterHumans = (characters) => ({
  type: actionsTypes.filterHumans,
  characters,
});

export const nextPage = (pageNumber) => ({
  type: actionsTypes.nextPage,
  pageNumber,
});

export const addCharacter = (character) => ({
  type: actionsTypes.addCharacter,
  character,
});

export const deleteCharacter = (id) => ({
  type: actionsTypes.deleteCharacter,
  id,
});

export const favCharacter = (id) => ({
  type: actionsTypes.favCharacter,
  id,
});
