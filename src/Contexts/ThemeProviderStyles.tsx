import {red} from "@mui/material/colors";
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});
const ThemeProviderStyles = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderStyles;
