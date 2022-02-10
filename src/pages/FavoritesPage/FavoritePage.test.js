import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import FavoritePage from "./FavoritesPage";

describe("Given a FavorutePage", () => {
  describe("When its rendered", () => {
    test("Then it should render a headline 'MY CHARACTERS'", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <FavoritePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("heading", {
        name: "MY CHARACTERS",
      });

      expect(expectedElement).toBeInTheDocument();
    });

    test("Then it should render 3 buttons", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <FavoritePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedButtons = screen.getAllByRole("button");

      expect(expectedButtons).toHaveLength(3);
    });
  });
});
