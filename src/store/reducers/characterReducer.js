import actionsTypes from "../actions/characters/actionTypes";

const characterReducer = (currentCharacters, action) => {
  let newCharacters;

  switch (action.type) {
    case actionsTypes.loadCharacters:
      newCharacters = [...action.character];
      break;

    default:
      newCharacters = [...currentCharacters];
  }
  return newCharacters;
};

export default characterReducer;
