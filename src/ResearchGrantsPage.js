import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import nserc from './NSERC_RGB.svg'
import cihr from './cihr.jpg'
import tfri from './tfri.png'
const grants = [
  {
    institute: 'Natural Sciences and Engineering Research Council of Canada',
    grant: 'Discovery Grant',
    description: 'Coming soon...',
    collaborators: [`Farouk
Nathoo`],
    funding: `(2020-2025) $31,000 per
annum, 5 years`,
    image: nserc, // Replace with institute image URL
  },
  {
    institute: 'Canadian Institutes of Health Research',
    grant: 'Project Grant',
    description:
      'Coming soon...',
    collaborators: [`Brad Nelson (Principal
Applicant) and Farouk
Nathoo (Co-Applicant)`],
    funding: `(2023-2028) $196,605 per
annum, 5 years`,
    image: cihr, // Replace with institute image URL
  },
  {
    institute: 'Terry Fox Research Institute',
    grant: `New Frontiers
Program Project
Grant`,
    description:
      'Coming soon...',
    collaborators: [`Brad Nelson (team leader,
PI), Naoto Hirano (PI),
Jeanette Boudreau (PI),
Farouk Nathoo (PI) and
Celine Laumont (CI),
collaborators and patient
partners`],
    funding: `(2024-2028) $2,400,000 for
four years`,
    image: tfri, // Replace with institute image URL
  },
];

const ResearchGrantsPage = () => {
  return (
    
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6, fontFamily: 'Roboto, sans-serif' }}>
      <Typography variant="h4" align="center" marginBottom='2rem' gutterBottom>
        Research Grants
      </Typography>
      <Grid container spacing={6}>
        {grants.map((grant, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Box
                component="img"
                src={grant.image}
                alt={`${grant.institute} logo`}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {grant.institute}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {grant.grant}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {grant.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Funding:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {grant.funding}
                </Typography>
                <Typography variant="subtitle2">Collaborators:</Typography>
                <Typography variant="body1">
                  {grant.collaborators.join(', ')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResearchGrantsPage;
