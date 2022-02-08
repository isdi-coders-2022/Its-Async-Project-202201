import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a Navbar component", () => {
  describe("When it is invoked", () => {
    test("Then it should render", () => {
      const text = "Favorites";
      render(
        <Router>
          <Navbar />
        </Router>
      );
      const expectedElement = screen.getByRole("link", {
        name: text,
      });
      expect(expectedElement).toBeInTheDocument();
    });
  });
});
