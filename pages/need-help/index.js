
import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout';
import Grid from '@mui/material/Grid';


export default function NeedHelpPage() {
  return (
    <Layout bgColor="#EBF3FE">
      <Typography variant="h1" color="primary" align="center" sx={{ mb: 4 }}>
        I need help
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        This form is for people which have to flee from the war in Ukraine and are in need of a home. It is especially for people that would like to find a home on a farm and are interested in
        agriculture.
      </Typography>

      
      <Grid sx={{ display: { xs: 'none', md: 'initial' } }}>
        <iframe
        style={{ width: '100%' }}
        src="https://docs.google.com/forms/d/e/1FAIpQLScmeoaNA02WPzID-Zrsn1PLuVMC3xorie20eqY2LskDTTKQUg/viewform?embedded=true"
        width="700"
        height="2100"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      </Grid>
      <Grid sx={{ display: { xs: 'initial', md: 'none' } }}>
      <iframe
        style={{ width: '100%' }}
        src="https://docs.google.com/forms/d/e/1FAIpQLScmeoaNA02WPzID-Zrsn1PLuVMC3xorie20eqY2LskDTTKQUg/viewform?embedded=true"
        width="700"
        height="2300"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      </Grid>
    </Layout>
  );
}
