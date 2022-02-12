import actionsTypes from "./actionTypes";

export const loadCharacters = (characters) => ({
  type: actionsTypes.loadCharacters,
  characters,
});

export const filterHumans = (characters) => ({
  type: actionsTypes.filterHumans,
  characters,
});

export const filterAliens = (characters) => ({
  type: actionsTypes.filterAliens,
  characters,
});

export const filterAlive = (characters) => ({
  type: actionsTypes.filterAlive,
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

export const editCharacter = (id, character) => ({
  type: actionsTypes.editCharacter,
  id,
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
