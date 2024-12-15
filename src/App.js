// LandingPage.js
import React, { useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Stack, Typography, Grid, Avatar,  Button, Box, Container, Divider,Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link as ExternalLink } from '@mui/material';
//import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description'; // For CV
//import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
//import group from './nathoo.jpeg'
import logo from './logo.png'
//import up from './up.jpg'
import spat from './spat.png'
import fn from './nathoo.jpg'
import { gsap } from 'gsap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BioGallery from './Biogallery';
import SoftwarePage from './SoftwarePage';
import nathoo from './nathoo.jpeg'
import Pubpage from './Pubpage'
import bayes from './bayes.png'
import high from './high.jpg'
//import spat from './spat.jpg'
import nserc from './NSERC_RGB.svg'
import math from './math.png'
import cihr from './cihr.jpg'
import uvic from './uvic.jpg'
import tfri from './tfri.png'
import biostat from './spat.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

import { Link as ScrollLink } from 'react-scroll';

function Slideshow() {
  return (
    <div
      style={{
        width: '100vw',
        height: '80vh',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        overflowY: 'hidden', // Disable vertical scrolling
      }}
    >
      <ScrollLink to="scrollable" smooth>
        <img
          id="scrollable"
          src={nathoo}
          alt="Scrollable"
          style={{
            display: 'block',
            width: '3000px',
            height: 'auto',
          }}
        />
      </ScrollLink>
    </div>
  );
}


function PISection() {
  const piRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      piRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.5 }
    );
  }, []);

  return (
    <Box sx={{ marginBottom: '3rem', padding: '2rem 0', backgroundColor: '#f7f7f7' }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
        Meet Our Principal Investigator
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} textAlign="center" sx={{ marginBottom: '3rem' }}>
          <Avatar
            src= {fn}
            alt="PI Image"
            sx={{ width: 400, height: 400, margin: 'auto', borderRadius: '50%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
Dr.Farouk Nathoo, PhD          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
          Dr. Nathoo is a Professor (Canada Research Chair Tier 2, 2013 - 2023) in the Department of Mathematics and Statistics at the University of Victoria. His research interests have emphasis on biostatistics and Bayesian methods broadly with specific emphasis on the analysis of spatial, temporal and spatiotemporal data. His teaching interests have emphasis on interdisciplinary training of graduate students, Bayesian statistics and data analysis.
          </Typography>
          
          {/* Links Section */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              component={ExternalLink}
              href="https://web.uvic.ca/~nathoo/nathoo_CV_TD.pdf" // Replace with actual CV link
              target="_blank"
              rel="noopener"
              sx={{ backgroundColor: '#2a3e4c', color: '#fff' }}
            >
              CV
            </Button>
          </Stack>

        </Grid>
        <iframe width="60%" height="500px" src="https://www.youtube.com/embed/FqXnwRdOop4?si=VD3AlDYcRuSluEPt&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen aut></iframe>

      </Grid>
    </Box>
  );
}
const OrganizationLogos = () => {
  const logos = [
    { image: nserc, name: 'Organization 1' },
    { image: cihr, name: 'Organization 2' },
    { image: tfri, name: 'Organization 3' },
    { image: uvic, name: 'Organization 4' },
    { image: math, name: 'Organization 5' },
  ];
  return (
    <Box sx={{ marginBottom: '3rem', padding: '2rem 0', backgroundColor: '#f7f7f7'}}>
      <Grid container spacing={4} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={6} md={2} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              <Box
                component="img"
                src={logo.image}
                alt={logo.name}
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
{/*               <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 600,
                }}
              >
                {logo.name}
              </Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

function ResearchInterests() {
  const interests = [
    { 
      title: 'Bayesian Statistics', 
      description: ' Integrating Prior Information; Hierarchical Modelling; Probabilistic Interpretations',
      image: bayes
    },
    { 
      title: 'Biostatistics', 
      description: 'Solving statistical problems, developing new modelling and computational methods and analyzing data motivated by biological and medical research towards advancing human health.',
      image: biostat
    },
    { 
      title: 'High Dimensional Statistics', 
      description: 'More unknown parameters than number of data points.',
      image: high
    },
    { 
      title: 'Spatial Statistics', 
      description: 'The analysis of data with a location attribute. These could be geographical areas (disease mapping; brain mapping), point locations (trees), random locations (cell locations on a tissue sample; animal movements).',
      image: spat
    },
  ];

  const interestRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      interestRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <Box sx={{ marginBottom: '3rem', padding: '2rem 0' }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
        Our Research Interests
      </Typography>
      <Typography variant="h6" sx={{ 
        fontFamily: 'Roboto, sans-serif', 
        color: '#555', 
        marginTop: '0.5rem', 
        width: '80%',
        margin: '0 auto'
      }}>
        Our group has primary interests in in biostatistics and Bayesian methods broadly with specific emphasis on the analysis of spatial, temporal  and spatiotemporal data, including neuroimaging data and spatial omics data. Application areas include neurodegenerative disorders (Alzheimer's disease, Attention-deficit/hyperactivity disorder) and cancer (ovarian cancer).
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {interests.map((interest, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              ref={(el) => (interestRef.current[index] = el)}
              sx={{ textAlign: 'center', padding: '1rem' }}
            >
              <Box
                component="img"
                src={interest.image}
                alt={interest.title}
                sx={{
                  width: '350px',
                  height: '350px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                  opacity: 0.8,
                }}
              />
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                {interest.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#555', marginTop: '0.5rem' }}>
                {interest.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/publications">
            <ListItemText primary="Publications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/software">
            <ListItemText primary="Software" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/team">
            <ListItemText primary="Team" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/join-us">
            <ListItemText primary="Join Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#000000', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src= {logo} // Replace with actual logo URL
              alt="Lab Logo"
              style={{ width: 40, height: 40, marginRight: '10px' }}
            />
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: 20, fontWeight: 700}}>
        Nathoo
        Group
      </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 700 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/publications">Publications</Button>
            <Button color="inherit" component={Link} to="/software">Software</Button>
            <Button color="inherit" component={Link} to="/team">Team</Button>
            <Button color="inherit" component={Link} to="/join-us">Join Us</Button>
          </Box>

          {/* Mobile Navigation */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}


function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000000', color: '#fff', padding: '2rem 0', marginTop: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
          Department of Mathematics and Statistics, University of Victoria
        </Typography>
        <Typography variant="body2" align="center" sx={{ fontFamily: 'Roboto, sans-serif', color: '#ccc' }}>
          David Turpin Building A418 | nathoo at uvic dot ca
        </Typography>
        <Typography variant="body2" align="center" sx={{ fontFamily: 'Roboto, sans-serif', color: '#ccc' }}>
        
        <ExternalLink href="https://www.uvic.ca/info-for/indigenous/index.php">         We acknowledge and respect the Lək̓ʷəŋən (Songhees and Esquimalt) Peoples on whose territory the university stands, and the Lək̓ʷəŋən and W̱SÁNEĆ Peoples whose historical relationships with the land continue to this day.
        </ExternalLink>
        </Typography>
      </Container>
    </Box>
  );
}

function LandingPage() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
        <Routes>
            {/* Landing Page */}
            <Route 
              path="/" 
              element={
                <>
                  <Slideshow />
                  <PISection />
                  <ResearchInterests />
                  <OrganizationLogos/>
                  <Divider />
                </>
              } 
            />
            {/* Other Pages */}
            <Route path="/publications" element = {<Pubpage/>} />
            <Route path="/software" element = {<SoftwarePage/>}  />
            <Route path="/team" element = {<BioGallery/>}/>
            <Route path="/join-us" 
            element = {
              <div align="center">
            <iframe title = "Nathoo Group Interest" src="https://docs.google.com/forms/d/e/1FAIpQLSdaM2KjS6VAJP9E3F6ppZmY8XKzDbttZTynZkGBj7JXDDC6-Q/viewform?embedded=true" width="80%" height="591" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            }
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default LandingPage;
