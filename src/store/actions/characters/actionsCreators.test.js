import { loadCharacters, favCharacter } from "./actionsCreators";

describe("Given a loadCharacters action", () => {
  describe("When it receives characters", () => {
    test("Then it should return an action type loadCharacters", () => {
      const characters = [
        "Rick Sanchez",
        "Morty Smith",
        "Summer Smith",
        "Jerry Smith",
      ];

      const expectedAction = {
        type: "load-characters",
        characters,
      };

      const action = loadCharacters(characters);

      expect(action).toEqual(expectedAction);
    });
  });
  describe("When it recives character", () => {
    test("Then it shoud return an action type favCharacter", () => {
      const character = {
        name: "Rick",
        id: 1,
      };

      const expectedAction = {
        type: "fav-character",
        id: character.id,
      };

      const action = favCharacter(character.id);

      expect(action).toEqual(expectedAction);
    });
  });
});
