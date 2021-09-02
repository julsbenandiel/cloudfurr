import { createTheme } from "@material-ui/core";
import { indigo, green } from "@material-ui/core/colors";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: green[800]
    }
  },
});