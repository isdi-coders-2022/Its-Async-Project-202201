import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Given a CharacterCard Component", () => {
  describe("When it receives a character", () => {
    test("Then it should render the character info", () => {
      const character1 = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
      };
      debugger;
      render(<CharacterCard character={character1} />);
      const expectedText = screen.queryByText(character1.name);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
