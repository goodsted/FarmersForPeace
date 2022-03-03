import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
function Header({ home }) {
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
        <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={303} height={68} />
        {!home && (
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
