import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import CharacterPage from "./CharacterPage";

describe("Given a CharacterPage", () => {
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
    test("then it should render 1 characters", async () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <CharacterPage />
          </CharacterContextProvider>
        </BrowserRouter>
      );
      const itemsImg = await screen.findAllByRole("list");
      expect(itemsImg).toHaveLength(1);
    });
  });
});
