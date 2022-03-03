import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';

export default function Layout({ children, bgColor}) {
  return (
    <div>
      <Header />
      <main style={{ background: bgColor ? bgColor :'#FFF' }}>
        <Grid
          container
          alignContent="flex-start"
          justifyContent="center"
          sx={{
            height: 'calc(100vh - 64px)',
            pt: 12,
            mt: 12,
            overflowY: 'scroll',
          }}
        >
          <Grid item xs={11} md={7}>
            {children}
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
