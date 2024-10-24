// BioGallery.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Modal, Container, Card, CardContent, IconButton, Stack, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description'; // For CV

const teamMembers = [
  {
    name: "Dr. John Doe",
    title: "Principal Investigator",
    researchInterest: "Leads the lab with a focus on Bayesian statistics, neuroimaging data, and computational methods.",
    image: "https://via.placeholder.com/100",
    education: "PhD in Biostatistics, University of Toronto",
    email: "john.doe@example.com",
    twitter: "https://twitter.com/johndoe",
    cv: "https://example.com/john-cv.pdf"
  },
  {
    name: "Dr. Jane Doe",
    title: "Postdoctoral Researcher",
    researchInterest: "Explores Bayesian methods in neuroimaging, focusing on spatial and spatiotemporal modeling.",
    image: "https://via.placeholder.com/100",
    education: "PhD in Statistics, University of Toronto",
    email: "jane.doe@example.com",
    twitter: "https://twitter.com/janedoe",
    cv: "https://example.com/jane-cv.pdf"
  },
  {
    name: "John Smith",
    title: "PhD Candidate",
    researchInterest: "Focuses on statistical methods for cancer bioinformatics, integrating Bayesian approaches.",
    image: "https://via.placeholder.com/100",
    education: "MSc in Biostatistics, Harvard University",
    email: "john.smith@example.com",
    twitter: "https://twitter.com/johnsmith",
    cv: "https://example.com/john-cv.pdf"
  }
];

const alumni = [
  {
    name: "Dr. Michael Adams",
    currentPosition: "Assistant Professor at University of Toronto"
  },
  {
    name: "Sarah Williams",
    currentPosition: "Data Scientist at Google"
  }
];

function BioGallery() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMember(null);
  };

  return (
    <Container sx={{ marginTop: '3rem', paddingBottom: '3rem' }}>
      {/* Team Members Section */}
      <Typography variant="h3" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: 'none',
                borderRadius: 0,
                border: 'none',
                backgroundColor: 'transparent'
              }}
              onClick={() => handleOpenModal(member)}
            >
              <CardContent>
                <Avatar src={member.image} alt={member.name} sx={{ width: 150, height: 150, margin: 'auto' }} />
                <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, marginTop: '1rem' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777' }}>
                  {member.title}
                </Typography>
                <ExpandMoreIcon sx={{ color: '#2a3e4c', marginTop: '0.5rem' }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Detailed Bio */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 24 }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedMember && (
            <>
              <Avatar src={selectedMember.image} alt={selectedMember.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, textAlign: 'center', marginTop: '1rem' }}>
                {selectedMember.name}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555', textAlign: 'center', marginTop: '1rem' }}>
                {selectedMember.researchInterest}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', textAlign: 'center', marginTop: '1rem' }}>
                <strong>Education:</strong> {selectedMember.education}
              </Typography>
              {/* Social Links */}
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: '1.5rem' }}>
                <Link href={`mailto:${selectedMember.email}`} target="_blank" rel="noopener">
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                </Link>
                <Link href={selectedMember.twitter} target="_blank" rel="noopener">
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Link>
                <Link href={selectedMember.cv} target="_blank" rel="noopener">
                  <IconButton>
                    <DescriptionIcon />
                  </IconButton>
                </Link>
              </Stack>
            </>
          )}
        </Box>
      </Modal>

      {/* Alumni Section */}
      <Box sx={{ marginTop: '4rem' }}>
        <Typography variant="h3" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>
          Alumni & Current Positions
        </Typography>
        {alumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
              {alum.currentPosition}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default BioGallery;
