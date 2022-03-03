import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
function Footer() {    
    return (        
        <AppBar position="static" component="footer" >
          <Toolbar sx={{p: 2}}>
          <Link href="#" color="inherit" variant="link">Terms & Conditions</Link>
          </Toolbar>
        </AppBar> 
    )
}
export default Footer;