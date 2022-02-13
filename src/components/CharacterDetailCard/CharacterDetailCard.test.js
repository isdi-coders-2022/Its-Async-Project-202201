import { render, screen } from "@testing-library/react";
import CharacterDetailCard from "./CharacterDetailCard";

describe("Given a CharacterDetailCard", () => {
  describe("When it recives a character", () => {
    test("Then it should render 'Morty'", () => {
      const character1 = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "imgURL",
        origin: { name: "Earth" },
        location: { name: "Venus" },
      };
      render(<CharacterDetailCard character={character1} />);

      const expectedText = screen.queryByText(character1.name);
      expect(expectedText).toBeInTheDocument();
    });
    test("Then it should render 'Alive'", () => {
      const character1 = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "imgURL",
        origin: { name: "Earth" },
        location: { name: "Venus" },
      };
      render(<CharacterDetailCard character={character1} />);

      const expectedText = screen.queryByText(character1.status);
      expect(expectedText).toBeInTheDocument();
    });
    test("Then it should render 'Earth'", () => {
      const character1 = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "imgURL",
        origin: { name: "Earth" },
        location: { name: "Venus" },
      };
      render(<CharacterDetailCard character={character1} />);

      const expectedText = screen.queryByText(character1.origin.name);
      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should render 'Venus'", () => {
      const character1 = {
        name: "Morty",
        gender: "Male",
        species: "Human",
        status: "Alive",
        url: "imgURL",
        origin: { name: "Earth" },
        location: { name: "Venus" },
      };
      render(<CharacterDetailCard character={character1} />);

      const expectedText = screen.queryByText(character1.location.name);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
