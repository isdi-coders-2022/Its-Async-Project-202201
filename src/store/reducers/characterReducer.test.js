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
});
