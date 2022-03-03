import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
function Footer({ home }) {
  return (
    <AppBar position={home ? 'fixed' : 'static'} component="footer" sx={{ bottom: 0, top: 'unset', height: 'min-content' }}>
      <Toolbar sx={{ p: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="/terms-and-conditions" passHref>
            <MuiLink  color="inherit" variant="link">
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
                <MuiLink href="#" color="inherit" variant="link">
                  Contribute
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container columnSpacing={3}>
              <Grid item>
                <MuiLink href="#" color="inherit" variant="link">
                  Volunteer
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink href="#" color="inherit" variant="link">
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
