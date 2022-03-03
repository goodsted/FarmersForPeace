import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

export default function Home() {
  const smMatch = useMediaQuery('(max-width:900px)');
  const xsMatch = useMediaQuery('(max-width:600px)');
  const rightColumn = {
    pr: { xs: 0, md: 4, lg: 8 },
    pl: { xs: 0, md: 4, lg: 8 },
    pt: { md: 4 },
    height: { xs: 'auto', md: '100%' },
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    position: {
      xs: 'fixed',
      md: 'static',
    },
    left: 0,
    bottom: 0,
    right: 0,
  };
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
      <Header home />
      <main>
        <Grid
          container
          sx={{
            height: { xs: '100vh', md: 'calc(100vh - 64px)' },
            pt: 12.5,
            overflowY: 'scroll',
          }}
        >
          <Grid
            container
            sx={{
              height: '100%',
            }}
          >
            <Grid item xs={12} md={6.6} sx={{ minHeight: { xs: 'calc(100vh - 192px)', md: 'unset' } }}>
              <iframe
                style={{ width: '100%', height: '100%', border: 'none' }}
                src="https://www.google.com/maps/d/embed?mid=1OsSeZk9c2c_LZ_ss8wGNGS9i1LORkub3&ehbc=1E3F86&z=4&ll=50.10205150020149, 14.439702489449177"
                width="640"
                height="480"
              ></iframe>
            </Grid>
            <Grid item xs={12} md={5.4} sx={rightColumn}>
              {!smMatch && (
                <Grid container sx={{ pb: 2.5 }}>
                  <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
                    Action for Ukraine
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    A lot of people may need to leave Ukraine in the near future and all of them need a place to stay, an activity to do and most of all loving human connections.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    At the same time, a lot of European farmers suffer from loneliness due to their often remote locations and they also often have trouble to find helping hands, especially in the
                    upcoming spring season.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    If there are farmers which are willing to host refugees from Ukraine, submit your interest and you&apos;ll appear on the map for those looking to find a safe space.
                  </Typography>
                </Grid>
              )}

              <Grid
                container
                justifyContent="space-between"
                spacing={3}
                columnSpacing={smMatch ? 2 : 4}
                sx={{
                  pb: { xs: 2, md: 4 },
                  pt: { xs: 2, md: 2 },
                  pl:{xs: 2,md:0},
                  pr:{xs: 2,md:0},
                  
                  borderTop: 1,
                  borderColor: 'grey.middle',
                  background: '#fff',
                  position: {
                    xs: 'unset',
                    md: 'sticky',
                  },
                  bottom: 0,
                }}
              >
                <Grid item xs={6}>
                  <Link href="/host" passHref>
                    <Button fullWidth variant="contained" color="primary" sx={{ p: {xs:1,md:2} ,fontSize: {xs:16,md: 'initial'} }}>
                      I want to host
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link href="/need-help" passHref>
                    <Button fullWidth variant="outlined" color="primary" sx={{ p: {xs:1,md:2} ,fontSize: {xs:16,md: 'initial'} }}>
                      I need help
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
      <Footer home />
    </div>
  );
}
