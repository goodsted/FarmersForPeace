import { createTheme } from '@mui/material/styles';
const font = "'Poppins','Roboto', sans-serif";
const primaryColor = "#1E3F86";
const Theme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root: {
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 600,
          lineHeight: "24px",
          borderWidth: 2,
          padding: 16,
          textTransform: "initial",
        },
        outlinedPrimary: {
          backgroundColor: "#fff",
          borderColor: primaryColor,
          '&:hover': {
            border: `2px solid ${primaryColor}`,
          },
        },
        contained: {
          boxShadow: 'none',
          borderWidth: 2,
          borderColor:'inherit',
          borderStyle:"solid",
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          boxShadow: 'none',
          borderColor:primaryColor,
        }
      }
    }
  },
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
    },
    link:{
      fontSize: 16,
      fontWeight:500,
      lineHeight:1.2
    }
  }
});

export default Theme;
