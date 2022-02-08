import actionsTypes from "./actionTypes";

export const loadCharacters = (character) => ({
  type: actionsTypes.loadCharacters,
  character,
});
