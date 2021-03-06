import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterContextProvider from "../../store/contexts/CharacterContextProvider";
import Form from "./Form";

describe("Given a From component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      const text = "Character Name";

      render(
        <BrowserRouter>
          <CharacterContextProvider>
            <Form
              buttonText="Create"
              actionOnSubmit={() => "Submited"}
              changeData={""}
              formData={""}
            ></Form>
          </CharacterContextProvider>
        </BrowserRouter>
      );
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
