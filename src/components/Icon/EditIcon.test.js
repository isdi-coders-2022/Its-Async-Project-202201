import { render, screen } from "@testing-library/react";
import EditIcon from "./EditIcon";

describe("Given an Icon component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      render(<EditIcon></EditIcon>);

      const expectedIcon = screen.getByTitle("EDIT");

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
