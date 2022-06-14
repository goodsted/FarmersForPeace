import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from '../components/MobileMenu';
import { useMediaQuery } from '@mui/material';
import i18n from 'i18next';
import {useState} from 'react';

function Header({ home }) {
  const smMatch = useMediaQuery('(max-width:900px)');
  const [lang, setLang] = useState(i18n?.language);


  const updateLang = value => {
    i18n.changeLanguage(value);
    setLang(value);
  };

  
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        boxShadow: 0,
        borderBottom: 1,
        borderColor: 'grey.xs',
      }}
    >
      <Toolbar sx={{ pr: 3, pl: 3, pt: 2, pb: 2, justifyContent: 'flex-start' }}>
        {smMatch ? (
          <>
            <MobileMenu />
            <Link href="/" passHref>
              <a>
                <Image priority={true} src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
              </a>
            </Link>
            <div style={{ width: 32 }}></div>
          </>
        ) : (
          <Link href="/" passHref>
            <a style={{ display: 'flex', marginRight: 'auto' }}>
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
        <Button
          onClick={() => {
            updateLang('en');
          }}
          sx={{ p:1,pr:0.5,pl:0.5, ml: 2,fontSize: 13 }}
          variant="text"
          color="primary"
          style={{minWidth:'unset',textDecoration: lang === 'en' ? 'underline':'none' }}
        >
          ENG
        </Button>
        <Button
          onClick={() => {
            updateLang('ukr');
          }}
          sx={{ p: 1,pr:0.5,pl:0.5,fontSize: 13 }}
          variant="text"
          color="primary"
          style={{minWidth:'unset',textDecoration: lang === 'ukr' ? 'underline':'none' }}
        >
          UKR
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
