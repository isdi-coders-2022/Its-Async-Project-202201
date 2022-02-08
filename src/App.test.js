import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("App re-routes", () => {
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
