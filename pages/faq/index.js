import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout';
import BasicAccordion from '../../components/accordion/BasicAccordion';

export default function FaqPage() {
  const helpContent = [
    {
      question: 'How soon can I expect an offer for accommodation?',
      answer:
        'You can always contact the host directly through the contact details provided on the map. If you prefer to go through us, then you can fill out the “ I need help” form and we will get back to you within 48 hours. We will try to match your request with an offer as soon as possible. Depending on the number of open requests and available offers, this may take a few days.',
    },
    { question: 'How do I get to the location of my accommodation?',answer: 'Your host will contact you to discuss how to get there. A note: Most European train services offer Ukrainian refugees the use of long-distance trains free of charge, a Ukrainian passport is sufficient. Just to be sure you should always check with your host though, they will know the rules around their location. ' },
    { question: 'Can I choose a region or city where I will be accommodated?', 
      answer: 'Yes, you are free to choose from all the available options on the map. However it is of course always up to the host to say if they are able to accommodate you. Special needs, disabilities, accessibility: If you or a member of your family have special needs (e.g. wheelchair users, need of a dialysis center nearby, allergies to certain pets like cats or dogs or similar), please be sure to write this in the comment field at the bottom of the online form. The hosts will read it and discuss it with you. However, please actively raise the issue with your hosts during your initial contact to ensure that your special needs can be accommodated.' 
    },
    { question: 'Do I have to pay rent for the accommodation?', 
      answer: 'No, the accommodation itself is free of charge. But there may be additional costs for the hosts, e.g. for energy, water, food or the like, and not all hosts have the financial means to pay for this themselves. Therefore, please ask in the initial contact with your hosts if there are any costs for you. In many regions there are local refugee initiatives that can also help to cover such costs if you are not able to do so yourself. We recommend contacting a local aid initiative for up-to-date information.' 
    },
    { question: 'How long can I stay?', 
      answer: 'You should talk to your hosts personally about the possible total length. ' 
    },
    { question: 'Can I bring a dog, cat or other pet with me?', 
      answer: 'If you have a dog, a cat or another pet, please mention this in the comment field at the end of the online form and when speaking with potential hosts.' 
    },
  ];
  const hostContent =[
    { question: 'How long should I be able to accommodate accommodation seekers?', 
      answer: 'This is entirely up to you, however we recommend at least 2 weeks in order to guarantee a certain level of stability..' 
    },
    { question: 'How do I contact the accommodation seekers?', 
      answer: 'They will either contact you directly through the contact information provided in the map or you will receive an email from us with contact details and needs of accommodation seekers. ' 
    },
    { question: 'Do I need language skills?', 
      answer: 'Indicate your language skills. Due to the current emergency situation, in many cases we have to make do without common language skills. If you wish to have common language skills, you can indicate this in your pin. ' 
    },
    { question: 'What is the legal situation?', 
      answer: 'You do not enter into any contractual relationship with us. You do not make any payments to us.' 
    },
    { question: 'What happens with my entered data?', 
      answer: 'The data which you want to share will be visible in your pin on the map, we will not use it for any other purpose.' 
    },
    { question: 'Can I choose who I host (gender, unaccompanied children, families, age groups, etc.)?', 
      answer: 'It is entirely up to you who you want to host, you can always refuse. ' 
    },
    { question: 'Is there a meeting beforehand?', 
      answer: 'Since there is an acute need for the refugees to find accommodation, it is unfortunately not possible to get to know each other beforehand.' 
    },
    { question: 'What happens if there are problems during the accommodation? Can I terminate the accommodation earlier in this case?', 
      answer: 'What happens if there are problems during the accommodation? Can I terminate the accommodation earlier in this case?' 
    },
    { question: 'What happens to people after the emergency sheltering? What happens to the people I have sheltered after the time I have given?', 
      answer: 'If you decide to host people at your place, we ask you to independently coordinate with them about their further needs. If you are not able to continue to offer your accommodation and do not know anyone who can do so, please contact us again.' 
    },
    { question: 'What equipment/furnishing is needed to accommodate people? (e.g. sofa bed instead of bed, furnish living room with mattresses, etc.).', 
      answer: 'There are no special requirements for furnishings. When registering on the website, you are welcome to indicate if you can only provide a sofa bed, air mattress, or similar. Since this is an emergency situation, we appreciate any help.' 
    },
    { question: 'How long are people from Ukraine officially allowed to stay in Germany without a residence permit or other official papers?', 
      answer: 'People from Ukraine are allowed to enter Europe without a visa and stay at least 90 days, an extension is possible. ' 
    },
    { question: 'Do I have to go with the people to the office or other official procedures?', 
      answer: 'No, there is no such obligation.' 
    },
    { question: 'Who is liable in case of damage? What about insurance claims?', 
      answer: 'As in any case where someone culpably causes damage, the person is liable for it; if insurance exists, it may kick in.' 
    },
    { question: 'What happens in cases of illness of the fugitives? Do they have health insurance?', 
      answer: 'All arrivals should find out what steps they need to take upon arrival, including the question of health insurance.' 
    },
  ]
  return (
    <Layout>
      <Typography variant="h1" color="primary" align="center" sx={{ mb: 4,fontFamily:"fontFamily",fontWeight:600,fontSize: { xs: 20,md: 32 } }}>
        Frequently asked questions (FAQ)
      </Typography>
      <BasicAccordion heading="For people looking:" content={helpContent} />
      <BasicAccordion heading="For people hosting:" content={hostContent} />
    </Layout>
  );
}
