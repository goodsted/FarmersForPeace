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
      <Typography variant="h3" color="primary" sx={{ mb: 2, mt: 3, fontSize: { xs: 32, md: 28 } }}>
        Interpretation and Definitions
      </Typography>
      <Typography variant="h6">Interpretation</Typography>
      <Typography variant="body2">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they
        appear in singular or in plural.
      </Typography>
      <Typography variant="h6">Definitions</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        For the purposes of these Terms and Conditions:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more
            of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Country</span> refers to: Berlin, Germany
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Company</span> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Farmers for Peace.
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Service</span> refers to the Website.
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Terms and Conditions </span> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Third-party Social Media Service</span> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>Website</span> refers to Farmers for Peace, accessible from <a href="https://www.farmersforpeace.eu/" >https://www.farmersforpeace.eu/</a>
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant="body2">
            <span style={{ fontWeight: 600 }}>You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </Typography>
        </li>
      </ul>
    </Layout>
  );
}
