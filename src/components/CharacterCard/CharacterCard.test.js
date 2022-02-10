import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

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
      render(
        <BrowserRouter>
          <CharacterCard character={character1} />
        </BrowserRouter>
      );
      const expectedText = screen.queryByText(character1.name);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
