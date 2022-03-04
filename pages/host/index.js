import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout';
import Grid from '@mui/material/Grid';

export default function NeedHelpPage() {
  return (
    <Layout bgColor="#EBF3FE">
      <Typography variant="h1" color="primary" align="center" sx={{ mb: 3 }}>
        I want to host
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 3 }}>
        This form is for farmers and other people, which have space in their home and are willing to host people that have to flee from the war in Ukraine.
      </Typography>

      <Grid sx={{ display: { xs: 'none', md: 'initial' } }}>
        <iframe
          style={{ width: '100%' }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfixXbWWgAzF9cz80ZGYNWVNWS00Qp-enwXhBUXLuh0_dLJag/viewform?embedded=true"
          width="700"
          height="2100"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="host-iframe"
        >
          Loading…
        </iframe>
      </Grid>
      <Grid sx={{ display: { xs: 'initial', md: 'none' } }}>
        <iframe
          style={{ width: '100%' }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfixXbWWgAzF9cz80ZGYNWVNWS00Qp-enwXhBUXLuh0_dLJag/viewform?embedded=true"
          width="700"
          height="2300"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="host-iframe"
        >
          Loading…
        </iframe>
      </Grid>
    </Layout>
  );
}
