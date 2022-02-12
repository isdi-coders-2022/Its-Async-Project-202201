import characterReducer from "./characterReducer";

describe("Given a characterReducer function", () => {
  describe("When it receives an empty array of characters and the action 'loadCharacters'", () => {
    test("Then it should return characters", () => {
      const currentCharacters = [];

      const expectedCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const action = {
        type: "load-characters",
        characters: [
          {
            id: 1,
            name: "Rick Sanchez",
            Status: "Alive",
            species: "Human",
            gender: "Male",
          },
          {
            id: 2,
            name: "Morty Smith",
            Status: "Alive",
            species: "Human",
            gender: "Male",
          },
        ],
      };
      const newCharacters = characterReducer(currentCharacters, action);
      expect(newCharacters).toEqual(expectedCharacters);
    });
  });
  describe("When it receives a character and the action 'addCharacter'", () => {
    test("Then it should return all the characters", () => {
      const currentCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const expectedCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 3,
          name: "Matheus",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const action = {
        type: "add-character",
        characters: {
          id: 3,
          name: "Matheus",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      };
      const allCharacters = characterReducer(currentCharacters, action);
      expect(allCharacters).toEqual(expectedCharacters);
    });
  });
  describe("When it receives an id and the action 'deleteCharacter'", () => {
    test("Then it should return all the characters minus the one with the corresponding id", () => {
      const currentCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const expectedCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const action = {
        type: "delete-character",
        id: 2,
      };
      const allCharacters = characterReducer(currentCharacters, action);
      expect(allCharacters).toEqual(expectedCharacters);
    });
  });
  describe("When it receives a character and the action 'favCharacter'", () => {
    test("Then it should return the character", () => {
      const currentCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];
      const expectedCharacter = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];
      const action = {
        type: "favCharacter",
        id: 1,
      };
      const favoriteCharacter = characterReducer(currentCharacters, action);
      expect(favoriteCharacter).toEqual(expectedCharacter);
    });
  });
});
