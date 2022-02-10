import actionsTypes from "../actions/characters/actionTypes";

const characterReducer = (currentCharacters, action) => {
  let newCharacters;

  switch (action.type) {
    case actionsTypes.loadCharacters:
      newCharacters = [...action.characters];
      break;

    case actionsTypes.addCharacter:
      newCharacters = [...currentCharacters, action.characters];
      break;

    case actionsTypes.deleteCharacter:
      newCharacters = currentCharacters.filter(
        (character) => character.id !== action.id
      );

      break;

    default:
      newCharacters = [...currentCharacters];
  }
  return newCharacters;
};

export default characterReducer;
