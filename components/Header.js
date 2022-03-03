import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
function Header({ home }) {
  const smMatch = useMediaQuery('(max-width:900px)');
  const xsMatch = useMediaQuery('(max-width:600px)');
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
            <IconButton size="large" edge="start" color="primary" aria-label="menu">
              <MenuIcon fontSize='large' />
            </IconButton>
            <Link href="/" passHref>
              <a>
                <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
              </a>
            </Link>
            <IconButton size="large" edge="start" color="primary" aria-label="info">
              <InfoOutlinedIcon fontSize='large' />
            </IconButton>
          </>
        ) : (
          <Link href="/" passHref>
            <a>
              <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={303} height={68} />
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
