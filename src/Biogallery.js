// BioGallery.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Modal, Container, Card, CardContent, IconButton, Stack, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import DescriptionIcon from '@mui/icons-material/Description'; // For CV

import zw from "./zw.png"
import ys from './ys.png'
//import up from './up.jpg'
import fl from './fl.JPG'
import sz from './sz.jpg'
import pv from './pv.jpg'
import fn from './nathoo.jpg'
import kl from './kl.png'
import ay from './Aijun.png'
import rp from './rp.jpg'
import sk from './sk.jpg'
const teamMembers = [
  {
    name: "Dr. Farouk Nathoo",
    title: "Principal Investigator",
    researchInterest: "Leads the lab with broad interests in biostatistics, Bayesian methods and spatial data with application to neurodegenerative disorders and ovarian cancer.",
    image: fn,
    education: "PhD (Simon Fraser), MMath (Waterloo), BSc (UBC)",
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
    researchInterest: "My research focus is on developing Bayesian models to analyze neuroimaging data, particularly fMRI, to study brain connectivity patterns and activation maps. In my primary work, I use Bayesian spatial modeling with SPDE priors and Hamiltonian Monte Carlo (HMC) to estimate brain activation patterns across voxels, capturing both spatial and temporal dependencies. In another project, I modeled fMRI signals using long-memory processes, revealing brain temporal complexities through Bayesian spatiotemporal modeling. Additionally, I worked on machine learning projects involving deforestation detection using Sentinel-2 satellite images, where I focused on optimizing precision in detecting deforested areas, handling imbalance data, and improving overall model performance.",
    image: ys,
    education: "MSc in Statistics, Sharif University of Technology",
  },
  {
    name: "Aijun Yang",
    title: "PhD Student",
    researchInterest: `Aijun Yang is a PhD candidate in Statistics at the University of Victoria supervised by Dr. Farouk Nathoo and Dr. Julian Lum. Her research focus is on developing innovative techniques for the analysis of tissue histology data including bias correction approaches for regression and methods for longitudinal point pattern analysis for tissue microarrays. Her application focus for her doctoral degree is ovarian cancer. She works on using advanced Bayesian methods, machine learning, and biostatistical techniques to solve complex, real-world problems.
In addition to her academic work, Aijun is a senior economist with BC Public Services, where she applies her statistical expertise to interdisciplinary projects in chronic disease monitoring, hospital performance evaluation, health utilization analysis, and patient-centered measurement survey modeling. By bridging research with practical applications, Aijun aims to enhance healthcare insights and support evidence-based public policy initiatives.`,
    image: ay,
    education: "MSc in Mathematics & Statistics, University of Victoria",
  },
  {
    name: "Shibai Zhang",
    title: "PhD Student",
    researchInterest: "Shibai Zhang is a PhD student in the Department of Mathematics & Statistics at the University of Victoria. She is co-supervised by Mark Lewis and Farouk Nathoo. She is deeply in love with animals and enthusiastic about applying mathematical and statistical methods to solve problems for animals and the environment. Currently, she is working on animal movement modeling, using inference methods such as Bayesian approaches to fit the model.",
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
    education: "BA in Mathematics, University of British Columbia",
    email: "floraliu221@outlook.com",
  },
  {
    name: "Shreena Kalaria",
    title: "MSc Student",
    researchInterest: `Shreena is an interdisciplinary Master’s student collaboratively working with the Nathoo and Nelson labs. Her thesis focuses on developing and applying novel bioinformatic tools, spatial statistics, and clustering methods to identify, classify, and investigate immune cell aggregates in ovarian cancer. She is grateful to have the opportunity to address complex problems in women's healthcare through this project. Additionally, she is working on a study analyzing statistical evidence measures and the reporting of significance in cancer research literature. Shreena aims to encourage academic and public engagement with data and evidence through improved statistical and information literacy. `,
    image: sk,
    education: "BS in Biopharmaceutical Science, University of Ottawa",
  },

  {
    name: "Rishabh Pabbi",
    title: "MSc Student",
    researchInterest: `Myself Rishabh Pabbi, a researcher passionate about employing statistical and machine learning methods to address challenges in healthcare and genomics. During my internship at Providence Health Care, I developed an advanced patient recovery tracking system to support clinicians in monitoring recovery journeys, showcasing my ability to design practical, data-driven solutions.

I am about to commence research under the supervision of Dr. Farouk Nathoo, focusing on developing statistical machine learning models for integrated data analysis. My research will explore immune responses in ovarian cancer, leveraging tools such as spatial transcriptomics, single-cell sequencing, and whole genome sequencing. By applying spatial statistics and advanced computational approaches, I aim to uncover insights into tumor microenvironments and immune-tumor interactions.

This work, at the intersection of statistics, machine learning, and oncology, seeks to advance our understanding of ovarian cancer biology and systemic immune responses, contributing to the development of precision immunotherapies and improved patient outcomes.`,
    image: rp,
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
    image: kl,
    education: "BSc Student in Data Science, University of Victoria",
    email: "kellythlemaire@uvic.ca",
  },

];

const postdoc = [
  {
    name: "Li Xing",
    rt: 'Regression for Longitudinal Analysis in Imaging Genetics with Bayesian Shrinkage Priors (2019)',
    currentPosition: `Assistant Professor, University of Saskatchewan`
  },
  {
    name: "Cedric Beulac (Co-supervised with Jiguo Cao and Faisal Beg)",
    rt: 'Genetic Correlates of Alzheimers Disease Subtypes (2022)',
    currentPosition: `Assistant Professor, Universite du Quebec a Montreal
`
  },

]

const phdalumni = [
  {
    name: "Angus Argyle",
    rt: 'Species Richness Estimation (2012)',
    currentPosition: `Statistician, Statistics
Canada, Ottawa`
  },
  {
    name: "Ming Teng (Co-supervised with Timothy Johnson)",
    rt: 'Bayesian Computation for Spatial Data and Neuroimaging Data (2017)',
    currentPosition: `Statistician, Morgan
Stanley, New York`
  },
  {
    name: "Yin Song",
    rt: 'Statistical Methods for Neuroimaging Data Analysis and Cognitive Science (2019)',
    currentPosition: `Data Scientist, Tutela`
  },
  {
    name: "Eugene Opoku (Co-supervised with Ejaz Ahmed)",
    rt: 'Methods for Imaging Data and Imaging Genetics (2021)',
    currentPosition: `Methodologist, Statistics Canada`
  }
  
]


const mastersalumni = [
  {
    name: "Hong Li",
    rt: 'Spatio-temporal modeling of fire frequency and severity from panel data (2008)',
    currentPosition: `Statistician, Health
Canada`
  },
  {
    name: "Parminder Sarohia",
    rt: 'A study of desperation in sport (2010)',
    currentPosition: `Actuarial Position, Mercer, Vancouver`
  },
  {
    name: "Salimah Ismail",
    rt: 'Mixed model and space-varying regression analysis of MEG brain signals (2012)',
  },
  {
    name: "Susan Kinniburgh",
    rt: 'Spatial and Network models for the spread of disease (2012)',
    currentPosition: `Regular Faculty
Member, Mathematics and
Statistics, Camosun
College `
  },
  {
    name: "Veronica Sabelnykova (Co-supervised with Mary Lesperance)",
    rt: 'Bayesian Methods for Joint Modeling of Survival and Longitudinal Data: Applications and Computing (2012)',
    currentPosition: `Statistician, Ontario
Institute for Cancer
Research`
  },
  {
    name: "Priya Grewal (Co-supervised with Mary Lesperance)",
    rt: 'Spatial smoothing and ecological regression analysis of low birth weight in British Columbia (2012)',
  },
  {
    name: "Keelin Greenlaw (Co-supervised with Mary Lesperance)",
    rt: 'Bayesian group-sparse multi-task regression for imaging genomics (2015)',
    currentPosition: `Statistician, Lady
Davis Institute for Medical
Research, Montreal`
  },
  {
    name: "Nicole Croteau",
    currentPosition: 'Statistical Consultant,UVic Statistical Consulting Centre',
    rt: `Persistent homology for MEG/EEG
classification with application to brain
decoding (2015)`
  },
  {
    name: "Nancy Guo",
    rt: `Spatial Analysis of the Tumor Microenvirnment	(2021)`,
    currentPosition: `Senior Data Scientist
at NielsenIQ, Shanghai`
  },
  {
    name: "Ziyi Lyu",
    rt: `Investigating the relationship between Bayes factors and highest density intervals (2023)`
  },
  {
    name: "Farbod Esmaeili",
    rt: `Functional Principal Components and
MGARCH for financial modelling (2024)`,
    currentPosition: `Data Analyst,
Nicholson Manufacturing
Inc.`
  },
  
]



const undergradalumni = [
  {
    name: "Robyn Bates (Co-supervised with Bill Reed)",
    rt: `An exploration of Bayesian
methods for the generalized
normal-Laplace distribution (2006)`,

    currentPosition: `PhD student, University of
Utah, Salt Lake City`
  },
  {
    name: "Philip Rempel",
    rt: `Exploring model misspecification
and robustness in joint models for
longitudinal and survival data (2007)`,
  },
  {
    name: "Eric Cormier",
    rt: `Exploring Markov models for
longitudinal binary data (2009)`,
    currentPosition: `Assistant Teaching
Professor, Mathematics and
Statistics, UVic`
  },
  {
    name: "Elena Szefer",
    rt: `Statistical Approaches for
Combining Group Analysis and
Registration of MR Images (2012)`,    
currentPosition: `Biostatistician, The EMMES
Corporation`
  },
  {
    name: "Robin Spilette (Co-supervised with Naznin Virji-Babul)",
    rt: `Graph Theoretic Analysis of EEG
Data (2014)`,    
currentPosition: `Law Student, University of
Toronto`
  },
  {
    name: "Robyn Kilshaw (Co-supervised with Mike Masson)",
    rt: `Bayesian Within-Subject Credible
Intervals for Repeated Measures
Designs (2018)`,
    currentPosition: `PhD Student, University of
Utah, Salt Lake City`
  },
  {
    name: "Cole Sibbald (Co-supervised with Nishant Mehta)",
    rt: `Differential Privacy Techniques in
Stacked Generalization (2020)`,
    currentPosition: `Data Engineer, GoDaddy`
  },
  {
    name: "Kush Manek (Co-supervised with Michelle Miranda)",
    rt: `Analysis of mobile EEG data and mild cognitive impairment (2023)`,
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
      <Typography variant="h3" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>
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
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, marginTop: '1rem' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#777' }}>
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
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, textAlign: 'center', marginTop: '1rem' }}>
                {selectedMember.name}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555', textAlign: 'left', marginTop: '1rem' }}>
                {selectedMember.researchInterest}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#777', textAlign: 'center', marginTop: '1rem' }}>
                <strong>Education:</strong> {selectedMember.education}
              </Typography>
              {/* Social Links */}
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: '1.5rem' }}>
                <Link href={`mailto:${selectedMember.email}`} target="_blank" rel="noopener">
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                </Link>
{/*                 <Link href={selectedMember.twitter} target="_blank" rel="noopener">
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Link>
                <Link href={selectedMember.cv} target="_blank" rel="noopener">
                  <IconButton>
                    <DescriptionIcon />
                  </IconButton>
                </Link> */}
              </Stack>
            </>
          )}
        </Box>
      </Modal>

      {/* Alumni Section */}
      <Box sx={{ marginTop: '4rem' }}>
        <Typography variant="h3" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>
          Alumni & Last Known Positions
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 350,  marginBottom: '1rem' }}>
          Post-doctoral
        </Typography>
        {postdoc.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
              Research Topic: {alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555' }}>
              Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}
        <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 350,  marginBottom: '1rem' }}>
          Doctoral
        </Typography>
        {phdalumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
              Research Topic: {alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555' }}>
              Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}
        <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 350,  marginBottom: '1rem' }}>
          Master's
        </Typography>
        {mastersalumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
              Research Topic: {alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555' }}>
              Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}
        <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 350, marginBottom: '1rem' }}>
          Undergraduate 
        </Typography>
        {undergradalumni.map((alum, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
              {alum.name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
            Research Topic: {alum.rt}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555' }}>
            Position: {alum.currentPosition}
            </Typography>

          </Box>
        ))}

      </Box>
      
    </Container>
  );
}

export default BioGallery;
