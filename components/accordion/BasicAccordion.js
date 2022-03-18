import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTypography from '@mui/material/Typography';
import OpenIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Remove';

const Accordion = styled(props => <MuiAccordion elevation={0} disableGutters {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  '&:last-of-child': {
    marginBottom: 0,
  },
  [theme.breakpoints.down('sm')]:{
    padding: theme.spacing(0),
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  fontWeight: 400,
}));

const BodyTypography = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.grey.sm,
}));

export default function SimpleAccordion({ content, heading }) {
  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          '.Mui-expanded & > .expandIconWrapper': {
            display: 'none',
          },
          '.collapsIconWrapper': {
            display: 'none',
            alignItems: 'center',
          },
          '.expandIconWrapper': {
            display: 'flex',
            alignItems: 'center',
          },
          '.Mui-expanded & > .collapsIconWrapper': {
            display: 'flex',
          },
        }}
      >
        <div className="expandIconWrapper">
          <OpenIcon color="primary" />
        </div>
        <div className="collapsIconWrapper">
          <CloseIcon color="primary" />
        </div>
      </Box>
    );
  };
  return (
    <div>
      {heading && (
        <MuiTypography variant="body1" color="primary" component="h3" sx={{ mb: 2, mt: 3, fontWeight: 600, fontSize: { xs: 18, md: 20 } }}>
          {heading}
        </MuiTypography>
      )}
      {content.map((c, index) => {
        if (!c.question && !c.answer) return null;
        return (
          <Accordion key={index}>
            <MuiAccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`}
              sx={{
                '.MuiAccordionSummary-expandIconWrapper': { transform: 'none', transform: 'none' },
                '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'none', transform: 'none' },
              }}
            >
              <MuiTypography color="primary" sx={{lineHeight:1.3}}>{c.question}</MuiTypography>
            </MuiAccordionSummary>

            <AccordionDetails>
              <BodyTypography>{c.answer}</BodyTypography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
