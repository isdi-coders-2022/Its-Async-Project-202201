import { render, screen } from "@testing-library/react";
import Icon from "./EditIcon";

describe("Given an Icon component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      render(<Icon></Icon>);

      const expectedIcon = screen.getByTitle("EDIT");

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
