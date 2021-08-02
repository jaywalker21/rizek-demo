import React from "react";
import { render } from "@testing-library/react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const renderWithTheme = (element) => {
  return render(
    <ThemeProvider theme={createTheme({})}>{element}</ThemeProvider>
  );
};

export default renderWithTheme;
