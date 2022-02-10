import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import FavoritesPage from "./FavoritesPage";

describe("Given a FavoritePage", () => {
  describe("When its instancied", () => {
    test("then it should render a heading MY CHARACTERS", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <FavoritesPage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("heading", {
        name: "MY CHARACTERS",
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
