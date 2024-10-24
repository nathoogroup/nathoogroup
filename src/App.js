// LandingPage.js
import React, { useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Stack, Typography, Grid, Avatar,  Button, Box, Container, Divider,Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link as ExternalLink } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description'; // For CV
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import group from './nathoo.jpeg'
//import profilepic from './nathoo.jpg'
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BioGallery from './Biogallery';

function Slideshow() {
  const slides = [
    { 
      image: group, 
      title: 'Welcome', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    { 
      image: 'https://via.placeholder.com/1200x600', 
      title: 'Projects', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    { 
      image: 'https://via.placeholder.com/1200x600', 
      title: 'Recognitions', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    arrows: false,
  };


  return (
    <Box sx={{ marginBottom: '3rem', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              textAlign: 'center',
              color: '#fff',
              height: '800px',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                letterSpacing: '1px',
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.5px',
              }}
            >
              {slide.subtitle}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
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
      <Typography variant="h5" gutterBottom align="center" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
        Meet Our Principal Investigator
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src= "https://via.placeholder.com/150"
            alt="PI Image"
            sx={{ width: 400, height: 400, margin: 'auto', borderRadius: '50%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
Farouk Nathoo, PhD          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
          Dr. Nathoo is a Canada Research Chair in Biostatistics and Professor in the Department of Mathematics and Statistics at the University of Victoria. His research interests are in Biostatistics, statistical methods for the analysis of neuroimaging data, Bayesian methods, variational Bayes, spatial and spatiotemporal data, statistical modeling and computational methods, cancer bioinformatics.

          </Typography>
          {/* Links Section */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<SchoolIcon />}
              component={ExternalLink}
              href="https://www.uvic.ca" // Replace with actual UVic link
              target="_blank"
              rel="noopener"
              sx={{ backgroundColor: '#2a3e4c', color: '#fff' }}
            >
              UVic Website
            </Button>
            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              component={ExternalLink}
              href="https://example.com/cv" // Replace with actual CV link
              target="_blank"
              rel="noopener"
              sx={{ backgroundColor: '#2a3e4c', color: '#fff' }}
            >
              CV
            </Button>
            <Button
              variant="contained"
              startIcon={<TwitterIcon />}
              component={ExternalLink}
              href="https://twitter.com/username" // Replace with actual Twitter link
              target="_blank"
              rel="noopener"
              sx={{ backgroundColor: '#1DA1F2', color: '#fff' }}
            >
              Twitter
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function ResearchInterests() {
  const interests = [
    { 
      title: 'Bayesian Statistics', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/150x150.png?text=Neural+Connectivity'
    },
    { 
      title: 'Biostatistics', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/150x150.png?text=Brain+Plasticity'
    },
    { 
      title: 'High Dimensional Statistics', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/150x150.png?text=Neuroimaging+Techniques'
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
      <Typography variant="h5" gutterBottom align="center" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
        Our Research Interests
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {interests.map((interest, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              ref={(el) => (interestRef.current[index] = el)}
              sx={{ textAlign: 'center', padding: '1rem' }}
            >
              <Box
                component="img"
                src={interest.image}
                alt={interest.title}
                sx={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                  opacity: 0.8,
                }}
              />
              <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                {interest.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555', marginTop: '0.5rem' }}>
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
          <ListItemButton component={Link} to="/research">
            <ListItemText primary="Research" />
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
      <AppBar position="static" sx={{ backgroundColor: '#2a3e4c', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src="https://via.placeholder.com/50" // Replace with actual logo URL
              alt="Lab Logo"
              style={{ width: 40, height: 40, marginRight: '10px' }}
            />
            <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Nathoo Group
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/research">Research</Button>
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
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0', marginTop: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Department of Mathematics and Statistics, University of Victoria
        </Typography>
        <Typography variant="body2" align="center" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#ccc' }}>
          David Turpin Building A418 | nathoo at uvic dot ca
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
                  <Divider />
                </>
              } 
            />

            {/* Other Pages */}
            <Route path="/research" />
            <Route path="/publications" />
            <Route path="/software"  />
            <Route path="/team" element = {<BioGallery/>}/>
            <Route path="/join-us" />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default LandingPage;
