import { render, screen } from "@testing-library/react";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import Form from "./Form";

describe("Given a From component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      const text = "Character Name";

      render(
        <CharacterContextProvider>
          <Form></Form>
        </CharacterContextProvider>
      );
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
