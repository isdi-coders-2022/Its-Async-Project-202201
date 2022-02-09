import { render, screen } from "@testing-library/react";
import BinIcon from "./BinIcon";

describe("Given an BinIcon component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      render(<BinIcon></BinIcon>);

      const expectedIcon = screen.getByTitle("DELETE");

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
