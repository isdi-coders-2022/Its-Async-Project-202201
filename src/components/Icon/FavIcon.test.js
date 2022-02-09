import { render, screen } from "@testing-library/react";
import FavIcon from "./FavIcon";

describe("Given a FavIcon component", () => {
  describe("When it's rendered", () => {
    test("Then it should be rendered", () => {
      render(<FavIcon></FavIcon>);

      const expectedIcon = screen.getByTitle("FAV");

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
