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
import up from './up.jpg'
//import profilepic from './nathoo.jpg'
import { gsap } from 'gsap';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BioGallery from './Biogallery';
import ResearchGrantsPage from './ResearchGrantsPage';
import SoftwarePage from './SoftwarePage';
import Pubpage from './Pubpage'
import bayes from './bayes.png'
import high from './high.jpg'
import spat from './spat.jpg'
const Slideshow = () => {
/*   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false, // Slider autoplay is optional
  };

  const slides = [
    { type: "image", src: "https://via.placeholder.com/800x450", alt: "Sample Image 1" },
    { type: "video", src: "dQw4w9WgXcQ", title: "YouTube Video 1" }, // Only provide the YouTube video ID
    { type: "image", src: "https://via.placeholder.com/800x450?text=Image+2", alt: "Sample Image 2" },
    { type: "video", src: "L_jWHffIx5E", title: "YouTube Video 2" },
  ];
 */
  return (
<iframe width="100%" height="800px" src="https://www.youtube.com/embed/FqXnwRdOop4?si=VD3AlDYcRuSluEPt&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen aut></iframe>
/*     <div
    style={{
      width: "100vw", // Full width of the viewport
      height: "80vh", // Occupy 80% of the viewport height
      overflow: "hidden", // Prevent content overflow
    }}
  >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              backgroundColor: "#000", // Fallback color for loading
            }}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt || `Slide ${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${slide.src}?autoplay=1`}
                title={slide.title || `Video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              ></iframe>
            )}
          </div>
        ))}
      </Slider>
    </div> */
  );
};

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
            src= {up}
            alt="PI Image"
            sx={{ width: 400, height: 400, margin: 'auto', borderRadius: '50%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
Dr.Farouk Nathoo, PhD          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
          Dr. Nathoo is a Canada Research Chair in Biostatistics and Professor in the Department of Mathematics and Statistics at the University of Victoria. His research interests are in Biostatistics, statistical methods for the analysis of neuroimaging data, Bayesian methods, variational Bayes, spatial and spatiotemporal data, statistical modeling and computational methods, cancer bioinformatics.

          </Typography>
          {/* Links Section */}
          <Stack direction="row" spacing={2} justifyContent="center">
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
      image: bayes
    },
    { 
      title: 'Biostatistics', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: spat
    },
    { 
      title: 'High Dimensional Statistics', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: high
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
                  width: '350px',
                  height: '350px',
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
      <AppBar position="static" sx={{ backgroundColor: '#000000', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src= {logo} // Replace with actual logo URL
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
    <Box sx={{ backgroundColor: '#000000', color: '#fff', padding: '2rem 0', marginTop: 'auto' }}>
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
            <Route path="/research" element = {<ResearchGrantsPage/>}/>
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
