import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import NotFound from "./NotFound";

describe("Given a NotFound page", () => {
  describe("When it is invoked", () => {
    test("then it should render not found", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <NotFound />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElements = screen.getByRole("heading", {
        name: "not found",
      });

      expect(expectedElements).toBeInTheDocument();
    });
  });
});
