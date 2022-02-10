import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CharacterContextProvider from "./store/contexts/CharacterContextProvider";

describe("Given an App component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a main element", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <App />
          </CharacterContextProvider>
        </BrowserRouter>
      );
      const expectedOutput = screen.getByRole("banner");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
