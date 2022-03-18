import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';

export default function Layout({ children, bgColor,wide=false}) {
  return (
    <div>
      <Head>
        <title>Action for Ukraine | Farmers for Peace</title>
        <meta
          name="description"
          content="We connect EU farmers and others who have space with refugees from Ukraine who need a home until the crisis ends. Share your space and we'll put it on the map."
          />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Header />
      <main style={{ background: bgColor ? bgColor :'#FFF' }}>
        <Grid
          container
          alignContent="flex-start"
          justifyContent="center"
          sx={{
            pt: {xs:4,md:12},
            pb: {xs:4,md:12},
            mt: 12,
            overflowY: 'auto',
          }}
        >
          <Grid item xs={11} md={wide?10:7}>
            {children}
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
