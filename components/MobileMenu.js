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
      { link: '/host', text: 'I want to host' },
      { link: '/need-help', text: 'I need help' },
      { link: 'https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk', text: 'Volunteer' },
      { link: 'https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk', text: 'Contact Us' },
      { link: '/terms-and-conditions', text: 'Terms & Conditions' }
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
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Dialog fullWidth fullScreen={true} aria-labelledby="info" onClose={handleClose} scroll="paper" BackdropProps={{ invisible: true }} open={open}>
        <Grid container sx={{ pr: 3, pl: 3, pt: 2, pb: 2, borderBottom: 1, borderColor: 'grey.middle' }} justifyContent="space-between">
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="info"
            onClick={() => {
              handleClose();
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Link href="/" passHref>
            <a>
              <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
            </a>
          </Link>
          <div style={{ width: 39 }}></div>
        </Grid>
        <Grid container flexDirection="column" sx={{ p: 3, bgcolor: 'primary.main', height: '100%' }}>
          {menu.map((item, index) => {
            return (
              <Link href={item.link} key={index} passHref>
                <a style={{ textDecoration: 'none' }}>
                  <Typography variant="link" sx={menuLinkStyle}>
                  {item.text}
                  </Typography>
                </a>
              </Link>
            );
          })}
        </Grid>
      </Dialog>
    </>
  );
}
