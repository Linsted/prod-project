import { fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider, withTranslation } from "react-i18next";

import renderWithTranslations from "shared/lib/tests/renderWithTranslations";
import Sidebar from "./Sidebar";

// import { renderWithTranslation } from
// "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("with only first param", () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
