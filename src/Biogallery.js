// BioGallery.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Modal, Container, Card, CardContent, IconButton, Stack, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description'; // For CV

import zw from "./zw.png"
import ys from './ys.png'
import up from './up.jpg'
import fl from './fl.JPG'
import sz from './sz.jpg'
import pv from './pv.png'
const teamMembers = [
  {
    name: "Dr. Farouk Nathoo",
    title: "Principal Investigator",
    researchInterest: "Leads the lab with a focus on Bayesian statistics, neuroimaging data, and computational methods.",
    image: up,
    education: "PhD in Statistics, Simon Fraser University",
    email: "john.doe@example.com",
  },
  {
    name: "Zhengxiao Wei",
    title: "Research Associate",
    researchInterest: "Zhengxiao Wei is a research associate with a strong focus on Bayesian methods, Markov chain Monte Carlo, and statistical modeling. His current work centers on Bayesian estimation techniques for within-subject designs, aiming to enhance methods for capturing individual variability and improving inference in repeated-measures studies. Looking ahead, Zhengxiao plans to delve into modeling spatial correlations within spatial transcriptomics data, further expanding his expertise in statistical analysis.",
    image: zw,
    education: "MSc in Statistics, University of Victoria",
  },
  {
    name: "Yasaman Shahhosseini",
    title: "PhD Student",
    researchInterest: "My research focuses on developing Bayesian models to analyze neuroimaging data, particularly fMRI, to study brain connectivity patterns and activation maps. In my primary work, I use Bayesian spatial modeling with SPDE priors and Hamiltonian Monte Carlo (HMC) to estimate brain activation patterns across voxels, capturing both spatial and temporal dependencies. In another project, I modeled fMRI signals using long-memory processes, revealing brain temporal complexities through Bayesian spatiotemporal modeling. Additionally, I worked on machine learning projects involving deforestation detection using Sentinel-2 satellite images, where I focused on optimizing precision in detecting deforested areas, handling imbalance data, and improving overall model performance.",
    image: ys,
    education: "MSc in Statistics, Sharif University of Technology",
  },
  {
    name: "Aijun Yang",
    title: "PhD Student",
    researchInterest: "Coming soon..",
    image: up,
    education: "MSc in Mathematics & Statistics, University of Victoria",
  },
  {
    name: "Shibai Zhang",
    title: "PhD Student",
    researchInterest: "I am a fourth-year undergraduate Data Science student at the University of Victoria. Initially, I started my undergraduate studies in Computer Science, but recently discovers a passion for statistics and decided to make the switch. For the next couple of terms, I will be a part of the team working with the professor on a research project after being awarded the JCURA scholarship. Our research will focus on how immune biomarkers in ovarian cancer tumour samples interact and whether patient survival is related to any of these biomarkers or their interactions. I am really excited to get hands-on experience doing research and see what hypotheses we develop and test over the course of this project.",
    image: sz,
    education: "MS in Applied Mathematics & Statistics, Johns Hopkins University",
    email: "shibaizhang@uvic.ca",
  },
  {
    name: "Yimeng (Flora) Liu",
    title: "MSc Student",
    researchInterest: `My name is Yimeng (Flora) Liu, and I am currently in my second year of a Master of Science in Statistics at the University of Victoria, working under the supervision of Dr. Nathoo and Dr. Nelson. My research interests lie in biostatistics and spatial statistics, fields I became passionate about during my master’s program, especially through my exposure to cancer research.

My current research project focuses on developing a new method to accurately pair immune receptor chains—specifically the light and heavy chains, as well as the alpha and beta chains in T and B cells. We aim to infer individual pairs using a statistical approach that combines gene expression matrices with spatial co-expression point patterns. This work has significant potential to enhance our understanding of immune responses within the tumor microenvironment, particularly in ovarian cancer.`,
    image: fl,
    education: "MS in Applied Mathematics & Statistics, Johns Hopkins University",
    email: "floraliu221@outlook.com",
  },
  {
    name: "Shreena Kalaria",
    title: "MSc Student",
    researchInterest: `Coming soon ..`,
    image: up,
    education: "BS in Biopharmaceutical Science, University of Ottawa",
  },

  {
    name: "Rishabh Pabbi",
    title: "MSc Student",
    researchInterest: `Coming soon ..`,
    image: up,
    education: "BS in Computer Science, University of Victoria",
  },
  {
    name: "Puneet Velidi",
    title: "MSc Student",
    researchInterest: `Puneet is an MSc student at the University of Victoria (co-supervised by Prof. Nathoo and Prof. Miranda) interested in making the statistics behind neuroimaging analysis more rigorous by using Bayesian methods to quantify uncertainty and help inform research direction. He previously worked as a Postbac Intern at Harvard Medical School/Mass General Hospital and as a Software Engineer at Walmart Global Tech. He graduated from Cornell University in 2022 with a degree in Statistics & Economics.`,
    image: pv,
    education: "BA in Statistics and Economics, Cornell University",
    email: "pvelidi@uvic.ca",
  },
  {
    name: "Kelly Lemaire",
    title: "Undergraduate Researcher",
    researchInterest: "I am a fourth-year undergraduate Data Science student at the University of Victoria. Initially, I started my undergraduate studies in Computer Science, but recently discovers a passion for statistics and decided to make the switch. For the next couple of terms, I will be a part of the team working with the professor on a research project after being awarded the JCURA scholarship. Our research will focus on how immune biomarkers in ovarian cancer tumour samples interact and whether patient survival is related to any of these biomarkers or their interactions. I am really excited to get hands-on experience doing research and see what hypotheses we develop and test over the course of this project.",
    image: up,
    education: "BSc Student in Data Science, University of Victoria",
    email: "kellythlemaire@uvic.ca",
  },

];
const gradalumni = [
  {
    name: "Hong Li",
    rt: 'Spatio-temporal modeling of fire frequency and severity from panel data',
    currentPosition: `Statistician, Health
Canada`
  },
  {
    name: "Parminder Sarohia",
    rt: 'A study of desperation in sport.',
    currentPosition: `Actuarial Position,
Mercer, Vancouver`
  },
  {
    name: "Salimah Ismail",
    rt: 'Mixed model and space-varying regression analysis of MEG brain signals.',
    currentPosition: `TV Production
Masters Candidate, Boston
University, College of
Communication`
  },
  {
    name: "Susan Kinniburgh",
    rt: 'Spatial and Network models for the spread of raccoon rabies.',
    currentPosition: `Regular Faculty
Member, Mathematics and
Statistics, Camosun
College `
  },
  {
    name: "Veronica Sabelnykova",
    rt: 'Bayesian Methods for Joint Modeling of Survival and Longitudinal Data: Applications and Computing',
    currentPosition: `Statistician, Ontario
Institute for Cancer
Research`
  },
  {
    name: "Priya Grewal",
    rt: 'Spatial smoothing and ecological regression analysis of low birth weight in British Columbia',
  },
  {
    name: "Keelin Greenlaw",
    rt: 'Bayesian methods for imaging genomics.',
    currentPosition: `Statistician, Lady
Davis Institute for Medical
Research, Montreal`
  },
  {
    name: "Nicole Croteau",
    currentPosition: 'Statistical Consultant,UVic Statistical Consulting Centre',
    rt: `Persistent homology for MEG/EEG
classification with application to brain
decoding.`
  },
  {
    name: "Nancy Guo",
    rt: `Spatial smoothing and ecological regression analysis of low birth weight in British Columbia`,
    currentPosition: `Senior Data Scientist
at NielsenIQ, Shanghai`
  },
  {
    name: "Ziyi Lyu",
    rt: `Relating Bayes factors and highest
density intervals for regression
coefficients in generalized linear
models`
  },
  {
    name: "Farbod Esmaeili",
    rt: `Functional Principal Components and
MGARCH for financial modelling`,
    currentPosition: `Data Analyst,
Nicholson Manufacturing
Inc.`
  },
  
]

const undergradalumni = [
  {
    name: "Robyn Bates",
    rt: `An exploration of Bayesian
methods for the generalized
normal-Laplace distribution`,

    currentPosition: `PhD student, University of
Utah, Salt Lake City`
  },
  {
    name: "Philip Rempel",
    rt: `Exploring model misspecification
and robustness in joint models for
longitudinal and survival data`,
    currentPosition: `Graduate Student, McGill
University`
  },
  {
    name: "Eric Cormier",
    rt: `Exploring Markov models for
longitudinal binary data`,
    currentPosition: `Assistant Teaching
Professor, Mathematics and
Statistics, UVic`
  },
  {
    name: "Elena Szefer",
    rt: `Statistical Approaches for
Combining Group Analysis and
Registration of MR Images`,    
currentPosition: `Biostatistician, The EMMES
Corporation`
  },
  {
    name: "Robin Spilette",
    rt: `Graph Theoretic Analysis of EEG
Data`,    
currentPosition: `Law Student, University of
Toronto`
  },
  {
    name: "Robyn Kilshaw",
    rt: `Bayesian Within-Subject Credible
Intervals for Repeated Measures
Designs`,
    currentPosition: `PhD student, University of
Utah, Salt Lake City`
  },
  {
    name: "Cole Sibbald",
    rt: `Differential Privacy Techniques in
Stacked Generalization`,
    currentPosition: `Data Engineer, GoDaddy`
  },

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
          Alumni & Last Known Positions
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 350,  marginBottom: '1rem' }}>
          Graduate
        </Typography>
        {gradalumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic', color: '#555' }}>
              Research Topic: {alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
              Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}
        <Typography variant="h4" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 350, marginBottom: '1rem' }}>
          Undergraduate
        </Typography>
        {undergradalumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic', color: '#555' }}>
            Research Topic:{alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
            Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}

      </Box>
      
    </Container>
  );
}

export default BioGallery;
