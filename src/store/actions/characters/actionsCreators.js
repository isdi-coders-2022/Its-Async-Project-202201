import actionsTypes from "./actionTypes";

export const loadCharacters = (characters) => ({
  type: actionsTypes.loadCharacters,
  characters,
});
