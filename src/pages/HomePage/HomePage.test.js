import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
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
    test("then it should render 20 characters", async () => {
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <HomePage />
          </CharacterContextProvider>
        </BrowserRouter>
      );

      const items = await screen.findAllByRole("img");

      expect(items).toHaveLength(20);
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

describe("Given a HomePage Component", () => {
  describe("When it renders the characters cards", () => {
    test("Then it should have a more info text", () => {
      const mockFunction = jest.fn();
      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <CharacterCard
              character={""}
              actionAddFav={mockFunction}
              deleteCharacter={() => ""}
            />
          </CharacterContextProvider>
        </BrowserRouter>
      );
      const moreInfoText = screen.getByRole("link", { name: "More Info" });
      expect(moreInfoText).toBeInTheDocument();
    });
  });
});
