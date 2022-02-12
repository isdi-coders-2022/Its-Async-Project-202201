import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Given a Filter Component", () => {
  describe("When it receives a 'ALL CHARACTERS' as text", () => {
    test("Then it should render 'ALL CHARACTERS' inside the h2 element", () => {
      const text = "ALL CHARACTERS";
      render(<Filter text={text} />);
      const expectedText = screen.queryByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
