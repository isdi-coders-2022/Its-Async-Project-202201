import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a button Component", () => {
  describe("When it recives a 'david' as text", () => {
    test("Then it should render 'david' inside", () => {
      const text = "david";
      debugger;
      render(<Button text={text} />);
      const expectedText = screen.queryByText(text);
      expect(expectedText).toBeInTheDocument();
    });

    describe("When it receives an action and word is clicked", () => {
      test("then it should call the action", () => {
        const action = jest.fn();
        const text = "david";
        render(<Button text={text} actionOnClick={action} />);
        userEvent.click(screen.getByText(text));
        expect(action).toHaveBeenCalled();
      });
    });
  });
});
