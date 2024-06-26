import { type ReactElement } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18n from "shared/config/i18n/i18nForTests";

export default function renderWithTranslations(ui: ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
}
