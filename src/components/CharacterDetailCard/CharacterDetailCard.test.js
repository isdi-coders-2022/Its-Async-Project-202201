import CharacterDetailCard from "./CharacterDetailCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a CharacterDetailCard Component", () => {
  describe("When it receives a character", () => {
    test("Then it should render the character info", () => {
      const character = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
        origin: { name: "Earth" },
        location: { name: "Earth" },
      };
      render(
        <BrowserRouter>
          <CharacterDetailCard character={character} />
        </BrowserRouter>
      );
      const expectedText = screen.queryByText(character.name);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
