import { createMuiTheme } from "@material-ui/core/styles";
  

const breakpointValues = {
  xs: 0,
  sm: 450,
  md: 650,
  lg: 930,
  xl: 1180,
};
const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

export default theme