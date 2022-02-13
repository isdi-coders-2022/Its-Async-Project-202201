import {
  loadCharacters,
  addCharacter,
  nextPage,
  deleteCharacter,
  filterHumans,
  filterAliens,
  filterAlive,
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

describe("Given an deleteCharacter action", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action type deleteCharacter", () => {
      const id = 1;
      const expectedAction = {
        type: "delete-character",
        id,
      };
      const action = deleteCharacter(id);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an filterHumans action", () => {
  describe("When it receives a character", () => {
    test("Then it should return an action type filterHumans", () => {
      const characters = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        id: 40,
      };

      const expectedAction = {
        type: "filter-humans",
        characters,
      };

      const action = filterHumans(characters);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an filterAliens action", () => {
  describe("When it receives a character", () => {
    test("Then it should return an action type filterAliens", () => {
      const characters = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Alien",
        gender: "Male",
        id: 46,
      };

      const expectedAction = {
        type: "filter-aliens",
        characters,
      };

      const action = filterAliens(characters);
      expect(action).toEqual(expectedAction);
    });

    test("Then it should return an action type filterAlive", () => {
      const characters = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Alien",
        gender: "Male",
        id: 26,
      };

      const expectedAction = {
        type: "filter-alive",
        characters,
      };

      const action = filterAlive(characters);
      expect(action).toEqual(expectedAction);
    });
  });
});
