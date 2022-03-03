import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmers for Peace</title>
        <meta name="description" content="Farmers for Peace - Action for Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header home />
      <main>
        <Grid
          container
          sx={{
            height: 'calc(100vh - 64px)',
            pt: 12,
            overflowY: 'scroll',
          }}
        >
          <Grid
            container
            sx={{
              height: '100%',
            }}
          >
            <Grid item xs={12} md={6.6}>
              <iframe
                style={{ width: '100%', height: '100%', border: 'none' }}
                src="https://www.google.com/maps/d/embed?mid=1TeCb8jRoqNP0e5q8i45_2wjxkPR2Xvq7&ehbc=1E3F86&z=4&ll=50.10205150020149, 14.439702489449177"
                width="640"
                height="480"
              ></iframe>
            </Grid>
            <Grid item xs={12} md={5.4} sx={{ pr: 8, pl: 8, pt: { md: 10 }, height: '100%', overflowY: 'scroll' }}>
              <Grid container sx={{ pb: 4 }}>
                <Typography variant="h1" color="primary" sx={{ mb: 6 }}>
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
              <Grid
                container
                justifyContent="space-between"
                spacing={3}
                columnSpacing={4}
                sx={{
                  pb: 4,
                  borderTop: 1,
                  borderColor: 'grey.middle',
                  background: '#fff',
                  position: 'sticky',
                  bottom: 0,
                }}
              >
                <Grid item xs={6}>
                  <Link href="/host" passHref>
                    <Button fullWidth variant="contained" color="primary" sx={{ p: 2 }}>
                      I want to host
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link href="/need-help" passHref>
                    <Button fullWidth variant="outlined" color="primary" sx={{ p: 2 }}>
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
