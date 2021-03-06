import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const menu = [
    { link: '/about', text: 'About', external: false },
    { link: '/host', text: 'I want to host', external: false },
    { link: '/need-help', text: 'I need help', external: false },
    { link: 'https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk', external: true, text: 'Volunteer' },
    { link: '/faq', text: 'FAQ', external: false },
    { link: 'https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk', external: true, text: 'Contact Us' },
    { link: '/terms-and-conditions', text: 'Terms & Conditions' },
  ];
  const menuLinkStyle = { textDecoration: 'none', color: '#fff', fontSize: 28, fontWeight: 700, lineHeight: '68px', fontFamily: "'Pragati Narrow',sans-serif" };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="info"
        onClick={() => {
          handleOpen();
        }}
        sx={{ pl: 2 }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Dialog fullWidth fullScreen={true} aria-labelledby="info" onClose={handleClose} scroll="paper" BackdropProps={{ invisible: true }} open={open}>
        <Grid container sx={{ pr: 3, pl: 3, pt: 2, pb: 3, borderBottom: 1, borderColor: 'grey.xs' }} justifyContent="space-between">
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="info"
            onClick={() => {
              handleClose();
            }}
            sx={{ pl: 2 }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Link href="/" passHref>
            <a style={{ display: 'flex' }}>
              <Image priority={true} src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
            </a>
          </Link>
          <div style={{ width: 32 }}></div>
        </Grid>
        <Grid container flexDirection="column" sx={{ p: 3, bgcolor: 'primary.main', height: '100%' }}>
          {menu.map((item, index) => {
            if (item.external) {
              return (
                <a href={item.link} key={index} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <Typography variant="link" sx={menuLinkStyle}>
                    {item.text}
                  </Typography>
                </a>
              );
            } else {
              return (
                <Link href={item.link} key={index} passHref>
                  <a style={{ textDecoration: 'none' }}>
                    <Typography variant="link" sx={menuLinkStyle}>
                      {item.text}
                    </Typography>
                  </a>
                </Link>
              );
            }
          })}

          <Typography variant="link" style={{ fontSize: 20, fontWeight: 500 }} sx={menuLinkStyle}>
            This site is open source{' '}
            <Link href="https://github.com/goodsted/FarmersForPeace" target="_blank" rel="noreferrer" passHref>
              <a style={{ textDecoration: 'none' }}>
                <Typography variant="link" style={{ fontSize: 20, fontWeight: 500, textDecoration: 'underline' }} sx={menuLinkStyle}>
                  Contribute
                </Typography>
              </a>
            </Link>
          </Typography>
        </Grid>
      </Dialog>
    </>
  );
}
