import {
  loadCharacters,
  addCharacter,
  nextPage,
  deleteCharacter,
} from "./actionsCreators";

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
});

describe("Given a nextPage action", () => {
  describe("When it receives page number", () => {
    test("Then it should return an action type nextPage", () => {
      const pageNumber = 1;
      const expectedAction = {
        type: "next-page",
        pageNumber,
      };
      const action = nextPage(pageNumber);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an addCharacter action", () => {
  describe("When it receives a character", () => {
    test("Then it should return an action type addCharacter", () => {
      const character = { name: "Rick Sanchez" };
      const expectedAction = {
        type: "add-character",
        character,
      };
      const action = addCharacter(character);
      expect(action).toEqual(expectedAction);
    });
  });
});
