import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
function Footer({ home }) {
  return (
    <AppBar position={home ? 'fixed' : 'static'} component="footer" sx={{ bottom: 0, top: 'unset', height: 'min-content' }}>
      <Toolbar sx={{ p: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="#" color="inherit" variant="link">
              Terms & Conditions
            </Link>
          </Grid>
          <Grid item>
            <Grid container columnSpacing={3}>
              <Grid item>
                <Typography variant="link">This site is open source</Typography>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="link">
                  Contribute
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container columnSpacing={3}>
              <Grid item>
                <Link href="#" color="inherit" variant="link">
                  Volunteer
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="link">
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
