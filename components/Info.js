import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Info() {
    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <InfoOutlinedIcon fontSize="large" />
      </IconButton>
      <Dialog fullWidth fullScreen={true} aria-labelledby="info" onClose={handleClose} scroll="paper" BackdropProps={{ invisible: true }} open={open}>
        <Grid container sx={{ pr: 3, pl: 3, pt: 2, pb: 2, borderBottom: 1, borderColor: 'grey.middle' }} justifyContent="space-between">
          <div style={{ width: 39 }}></div>
          <Link href="/" passHref>
            <a>
              <Image src="/farmersforpeace-logo.svg" alt="Farmers for Peace Logo" width={217} height={55} />
            </a>
          </Link>
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
        </Grid>
        <Grid container sx={{ p: 3 }}>
          <Typography variant="h1" color="primary" sx={{ mb: 3, fontSize: 32 }}>
            Action for Ukraine
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A lot of people may need to leave Ukraine in the near future and all of them need a place to stay, an activity to do and most of all loving human connections.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            At the same time, a lot of European farmers suffer from loneliness due to their often remote locations and they also often have trouble to find helping hands, especially in the upcoming
            spring season.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            If there are farmers which are willing to host refugees from Ukraine, submit your interest and you&apos;ll appear on the map for those looking to find a safe space.
          </Typography>
        </Grid>
      </Dialog>
    </>
  );
}
