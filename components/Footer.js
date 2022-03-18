import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

function Footer({ home }) {
  const smMatch = useMediaQuery('(max-width:900px)');
  if (smMatch) return null;
  return (
    <AppBar position={home ? 'fixed' : 'static'} component="footer" sx={{ bottom: 0, top: 'unset', height: 'min-content' }}>
      <Toolbar sx={{ p: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="/terms-and-conditions" passHref>
              <MuiLink color="inherit" variant="link">
                Terms & Conditions
              </MuiLink>
            </Link>
          </Grid>
          <Grid item>
            <Grid container columnSpacing={3}>
              <Grid item>
                <Typography variant="link">This site is open source</Typography>
              </Grid>
              <Grid item>
                <MuiLink href="https://github.com/goodsted/FarmersForPeace" target="_blank" color="inherit" variant="link">
                  Contribute
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container columnSpacing={3}>
              <Grid item>
                <MuiLink target="_blank" href="https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk" color="inherit" variant="link">
                  Volunteer
                </MuiLink>
              </Grid>
              <Grid item>
                <Link href="/faq" passHref>
                  <MuiLink color="inherit" variant="link">
                    FAQ
                  </MuiLink>
                </Link>
              </Grid>
              <Grid item>
                <MuiLink target="_blank" href="https://www.goodsted.com/group/farmers-for-peace/cl0b3o7d3kldq01061gzd1qlk" color="inherit" variant="link">
                  Contact Us
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
