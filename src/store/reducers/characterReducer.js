import actionsTypes from "../actions/characters/actionTypes";

const characterReducer = (currentCharacters, action) => {
  let newCharacters;

  switch (action.type) {
    case actionsTypes.loadCharacters:
      newCharacters = [...action.characters];
      break;

    case actionsTypes.filterHumans:
      const newfilteredCharacters = [...currentCharacters, action.characters];
      const filteredHumans = newfilteredCharacters.filter(
        (character) => character.species === "Human"
      );
      newCharacters = filteredHumans;
      break;

    case actionsTypes.filterAliens:
      const newfilteredAlienCharacters = [
        ...currentCharacters,
        action.characters,
      ];
      const filteredAliens = newfilteredAlienCharacters.filter(
        (character) => character.species === "Alien"
      );
      newCharacters = filteredAliens;
      break;

    case actionsTypes.filterAlive:
      const newfilteredLiveCharacters = [
        ...currentCharacters,
        action.characters,
      ];
      const filteredAlives = newfilteredLiveCharacters.filter(
        (character) => character.status === "Alive"
      );
      newCharacters = filteredAlives;
      break;

    case actionsTypes.addCharacter:
      newCharacters = [...currentCharacters, action.character];
      break;

    case actionsTypes.editCharacter:
      newCharacters = [...currentCharacters, action.character];
      break;

    case actionsTypes.deleteCharacter:
      newCharacters = currentCharacters.filter(
        (character) => character.id !== action.id
      );
      break;

    case actionsTypes.favCharacter:
      newCharacters = currentCharacters.map((character) => {
        if (character.id === action.id) {
          return {
            ...character,
            favorite: !character.favorite,
          };
        }
        return { ...character };
      });
      break;

    default:
      newCharacters = [...currentCharacters];
  }
  return newCharacters;
};

export default characterReducer;
