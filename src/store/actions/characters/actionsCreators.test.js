import { loadCharacters } from "./actionsCreators";

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
