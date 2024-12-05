import React, { useState,useEffect } from 'react';
import capvalistypelogo from '../src/Capvalislogo2.jpg';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from './context/Firebase';
import Profilepage from './pages/Profilepage';
import { Menu, X } from 'lucide-react';

// Custom theme to match your color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#A5F3FC', // cyan-200 equivalent
    },
  },
});

const Navbar = () => {
  const [showLoginOption, setShowLoginOption] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navButtonStyle = {
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(165, 243, 252, 0.08)', // subtle cyan hover
    },
  };

  const navigate = useNavigate();
  const log = useFirebase();

  useEffect(() => {
    log.keeploggedin ? setShowLoginOption(false) : setShowLoginOption(true);
  }, [log.keeploggedin]);

  const sendToLogin = () => {
    navigate('/Login');
  };

  const sendToCareer = () => {
    navigate('/Career');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="navbar h-20 w-full bg-black flex flex-row justify-between items-center px-4 border-b-2 rounded-b-md border-cyan-200 z-40 relative">
        <div className="logo-container">
          <img
            src={capvalistypelogo}
            alt="Company Logo"
            className="h-16 object-contain"
          />
        </div>
        <div className="hidden md:flex flex-row items-center gap-4">
          <Button sx={navButtonStyle}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </Button>
          <Button sx={navButtonStyle}>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </Button>
          <Button sx={navButtonStyle} onClick={sendToCareer}>
            Career
          </Button>
          <Button sx={navButtonStyle}>
            <Link to="ourservices" smooth={true} duration={500}>
              Our Courses
            </Link>
          </Button>
          {showLoginOption ? (
            <Button
              variant="outlined"
              sx={{
                color: '#A5F3FC',
                borderColor: '#A5F3FC',
                '&:hover': {
                  borderColor: '#A5F3FC',
                  backgroundColor: 'rgba(165, 243, 252, 0.08)',
                },
              }}
              onClick={sendToLogin}
            >
              Login
            </Button>
          ) : (
            <Profilepage />
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden md:hidden flex">
          <Button
            sx={navButtonStyle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          {showLoginOption ? (
            <Button
              variant="outlined"
              sx={{
                color: '#A5F3FC',
                borderColor: '#A5F3FC',
                '&:hover': {
                  borderColor: '#A5F3FC',
                  backgroundColor: 'rgba(165, 243, 252, 0.08)',
                },
              }}
              fullWidth
              onClick={sendToLogin}
            >
              Login
            </Button>
          ) : (
            <Profilepage />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black pb-4">
          <Button sx={navButtonStyle} fullWidth>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </Button>
          <Button sx={navButtonStyle} fullWidth>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </Button>
          <Button sx={navButtonStyle} fullWidth onClick={sendToCareer}>
            Career
          </Button>
          <Button sx={navButtonStyle} fullWidth>
            <Link to="ourservices" smooth={true} duration={500}>
              Our Courses
            </Link>
          </Button>
          
        </div>
      )}
    </ThemeProvider>
  );
};

export default Navbar;