import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is clicked on the favorites link", () => {
    test("Then it renders an empty banner on the favorites page", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: /favorites/i });
      userEvent.click(link);

      const title = screen.getByRole("banner", { name: "" });

      expect(title).toBeInTheDocument();
    });
  });
});
