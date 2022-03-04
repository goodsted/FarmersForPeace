import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import InfoDialog from '../components/Info';
import MobileMenu from '../components/MobileMenu';
import { useMediaQuery } from '@mui/material';
function Header({ home }) {
  const smMatch = useMediaQuery('(max-width:900px)');
  
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        boxShadow: 0,
        borderBottom: 1,
        borderColor: 'grey.middle',
      }}
    >
      <Toolbar sx={{ p: 2, justifyContent: 'space-between' }}>
        {smMatch ? (
          <>
            <MobileMenu/>
            <Link href="/" passHref>
              <a>
                <Image priority={true} src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
              </a>
            </Link>
            <InfoDialog/>
          </>
        ) : (
          <Link href="/" passHref>
            <a style={{display: 'flex'}}>
              <Image priority={true} src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={303} height={68} />
            </a>
          </Link>
        )}

        {!home && !smMatch && (
          <Link href="/" passHref>
            <Button variant="outlined" color="primary">
              View map
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
