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
  describe("When it receives an array of characters and the action 'deleteCharacter'", () => {
    test("Then it should return characters", () => {
      const currentCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];

      const expectedCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
        },
      ];
      const action = {
        type: "delete-character",
        id: 2,
      };
      const characters = characterReducer(currentCharacters, action);
      expect(characters).toStrictEqual(expectedCharacters);
    });
  });
});
