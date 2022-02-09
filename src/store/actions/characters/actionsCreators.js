import actionsTypes from "./actionTypes";

export const loadCharacters = (characters) => ({
  type: actionsTypes.loadCharacters,
  characters,
});


export const addCharacter = (character) => ({
  type: actionsTypes.addCharacter,
  character,
  });

export const deleteCharacter = (id) => ({
  type: actionsTypes.deleteCharacter,
  id,

});
