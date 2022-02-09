import actionsTypes from "./actionTypes";

export const loadCharacters = (characters) => ({
  type: actionsTypes.loadCharacters,
  characters,
});

export const nextPage = (pageNumber) => ({
  type: actionsTypes.nextPage,
  pageNumber,
});
