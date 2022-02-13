import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When its instancied", () => {
    test("then it should render a heading ALL CHARACTERS", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("heading", {
        name: "ALL CHARACTERS",
      });

      expect(expectedElement).toBeInTheDocument();
    });
    test("then it should render 5 buttons", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(5);
    });
    test("then it should render one list items", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const items = screen.getAllByRole("list");

      expect(items).toHaveLength(1);
    });
    test("then it should render a list", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const list = screen.queryByRole("list");

      expect(list).not.toBeNull();
    });
    test("then it should render Rick Sanchez", async () => {
      const { findByText } = render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(await findByText("Rick Sanchez")).toBeInTheDocument();
    });
  });
});
