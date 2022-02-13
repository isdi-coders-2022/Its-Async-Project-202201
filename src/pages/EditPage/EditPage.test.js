import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import EditPage from "./EditPage";

describe("Given an EditPage", () => {
  describe("When it is invoked", () => {
    test("then it should render 5 inputs", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <EditPage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElements = screen.getAllByRole("textbox");

      expect(expectedElements).toHaveLength(5);
    });
  });
});
