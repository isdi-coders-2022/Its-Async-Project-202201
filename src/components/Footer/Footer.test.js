import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it is invoked", () => {
    test("Then it should display images with alt text", () => {
      const text = "Jerry logo from Rick and Morty";
      render(<Footer />);
      const expectedElement = screen.getByRole("img", {
        name: text,
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
