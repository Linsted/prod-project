import { render, screen } from "@testing-library/react";
import Button, { BUTTON_THEME } from "./Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button theme={BUTTON_THEME.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
