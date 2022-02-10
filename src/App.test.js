import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import CharacterContextProvider from "./store/contexts/CharacterContextProvider";

describe("Given an App component that displays the homepage", () => {
  describe("When the user clicks at the Favorites nav link", () => {
    test("Then the My Characters text should render at the page", () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <App />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: "Favorites" });
      userEvent.click(link);

      const title = screen.getByRole("heading", { name: "MY CHARACTERS" });

      expect(title).toBeInTheDocument();
    });
  });
});

describe("When the user clicks at the Create nav link", () => {
  test("Then the a form should render at the page", () => {
    render(
      <BrowserRouter>
        <CharacterContextProvider>
          <App />
        </CharacterContextProvider>
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: "Create" });
    userEvent.click(link);

    const title = screen.getByRole("textbox", {
      name: "Character Name Character Status Character Species Character Gender Image URL",
    });

    expect(title).toBeInTheDocument();
  });
});
