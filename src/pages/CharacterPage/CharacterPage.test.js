import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import CharacterPage from "./CharacterPage";

describe("Given a HomePage", () => {
  describe("When its instancied", () => {
    test("then it should render a heading CHARACTER DETAILS", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <CharacterPage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("heading", {
        name: "CHARACTER DETAILS",
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
