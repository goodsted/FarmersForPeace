import { createTheme } from '@mui/material/styles';
const font = "'Poppins','Roboto', sans-serif";

const Theme = createTheme({
  
  palette: {
    primary: {
      main: '#1E3F86',
    },
    grey:{
      middle: "#CECECE",
    }
  },
  typography:{
    fontFamily: font,
    h1: {
      fontFamily:"'Pragati Narrow', sans-serif",
      fontSize: 56,
      fontWeight: 700,
    },
    h2: {
      fontFamily:"'Pragati Narrow', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily:"'Pragati Narrow', sans-serif",
      fontWeight: 700,
    },
    body2:{
      fontSize: 16,
      fontWeight:500,
      lineHeight: 2,
    }
  }
});

export default Theme;
