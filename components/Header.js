import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
function Header() {    
    return (        
        <AppBar position="static" sx={{
          backgroundColor: "#fff",
          boxShadow: 0,
          borderBottom: 1,
          borderColor: 'grey.middle'  
        }}>
        <Toolbar sx={{p: 2}}>
        <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={300} height={68} />
        </Toolbar>
      </AppBar> 
    )
}
export default Header;