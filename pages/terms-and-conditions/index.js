import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout';

export default function NeedHelpPage() {
  return (
    <Layout>
      <Typography variant="h1" color="primary" sx={{ mb: 3, fontSize: { xs: 32, md: 48 } }}>
        Terms & Conditions
      </Typography>
      <Typography variant="body2">Last updated: March 03, 2022</Typography>
      <Typography variant="body2">Please read these terms and conditions carefully before using Our Service.</Typography>
      <Typography variant="h3" color="primary" sx={{ mb: 2,mt:3, fontSize: { xs: 32, md: 28 } }}>
      Interpretation and Definitions
      </Typography>
      <Typography variant="h6">
      Interpretation
      </Typography>
      <Typography variant="body2">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Typography>
      <Typography variant="h6">
      Definitions
      </Typography>
      <Typography variant="body2"s>
      For the purposes of these Terms and Conditions:
      </Typography>

    </Layout>
  );
}
