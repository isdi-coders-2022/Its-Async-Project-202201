import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import CreatePage from "./CreatePage";

describe("Given a CreatePage", () => {
  describe("When it is invoked", () => {
    test("then it should render 5 inputs", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <CreatePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElements = screen.getAllByRole("textbox");

      expect(expectedElements).toHaveLength(5);
    });
  });
});
