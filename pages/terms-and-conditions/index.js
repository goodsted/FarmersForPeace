import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout';

export default function NeedHelpPage() {
  return (
    <Layout>
      <Typography variant="h1" color="primary" sx={{ mb: 4 }}>
        Terms & Conditions
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontWeight: 500 }}>
        By using this platform you agree to the following:
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, fontWeight: 400 , fontSize: 18}}>
        <ol>
          <li style={{marginBottom: 24}}>
            By using Farmers for Peace services you will be able to access information all of which comprise the &quot;Farmers for Peace Information&quot; made available by Farmers for Peace platform.
          </li>
          <li style={{marginBottom: 24}}>
            You agree that the Farmers for Peace Information is provided for information purposes and represents general guidance only. The Platform Information is only subjective appraisal and
            assessment of available data that may be open to more than one interpretation. The Platform Information is not the result of the application of any scientific analysis or process.
            Therefore, you should not rely upon any Platform Information when making any decisions. You also acknowledge and agree that (i) the Platform Information is only made available to you for
            your own purposes in assessing user needs generally and you agree to use it exclusively for informational purposes only and (ii) that the Platform Information is not and should not be
            relied on as being advice of any kind.
          </li>
          <li style={{marginBottom: 24}}>
            You agree that the Farmers for Peace Information is made available by Farmers for Peace on an &quot;as is&quot; and &quot;as available&quot; basis and that the content and format of the
            Farmers for Peace Information may be changed by Farmers for Peace without notice to you.
          </li>
          <li style={{marginBottom: 24}}s>
            Whilst Farmers for Peace makes all reasonable endeavours to ensure the accuracy of the Farmers for Peace Information, there may be inaccuracies, errors or omissions contained in the
            Information. Accordingly, to the extent permitted by applicable law.
          </li>
        </ol>
      </Typography>
      <Typography variant="h6" color="primary" sx={{ mb: 4, fontWeight: 600 }}>
        Your Privacy
      </Typography>
    </Layout>
  );
}
