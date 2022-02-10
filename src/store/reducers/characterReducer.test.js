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
  describe("When it receives an array of characters and the action 'deleteCharacters'", () => {
    test("Then it should return characters", () => {
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
        type: "delete-characters",
        id: 2,
      };
      const characters = characterReducer(currentCharacters, action);
      expect(characters).toStrictEqual(expectedCharacters);
    });
  });
  describe("When it recives an unfavorite character an the action 'favCharacter'", () => {
    test("Then it should return the same character with favorite", () => {
      const currentCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
          favorite: false,
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
          favorite: false,
        },
      ];

      const expectedCharacters = [
        {
          id: 1,
          name: "Rick Sanchez",
          Status: "Alive",
          species: "Human",
          gender: "Male",
          favorite: false,
        },
        {
          id: 2,
          name: "Morty Smith",
          Status: "Alive",
          species: "Human",
          gender: "Male",
          favorite: true,
        },
      ];
      const action = {
        type: "fav-character",
        id: 2,
      };

      const characters = characterReducer(currentCharacters, action);

      expect(characters).toEqual(expectedCharacters);
    });
  });
});
