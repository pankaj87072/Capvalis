import {React,useState,useEffect} from 'react';
import capvalistypelogo from '../src/Capvalislogo2.jpg';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom'
import { useFirebase } from './context/Firebase';
import Profilepage from './pages/Profilepage';
// Custom theme to match your color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#A5F3FC', // cyan-200 equivalent
    },
  },
});

const Navbar = () => {
  const [Showloginoption,setShowloginoption]=useState(false);
  const navButtonStyle = {
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(165, 243, 252, 0.08)', // subtle cyan hover
    },
  };

  //
  const navigate=useNavigate();
  
  const sendtologin=()=>{
    navigate('/Login');
  }
  const sendtocareer=()=>{
    navigate('/Career');
  }
  const log=useFirebase();
  useEffect(()=>{
    log.keeploggedin?setShowloginoption(false):setShowloginoption(true);
  },[log.keeploggedin]);
    
  return (
    <ThemeProvider theme={theme}> 
      <div className='navbar h-20 w-full bg-black flex flex-row justify-between items-center px-4 border-b-2 rounded-b-md border-cyan-200'>
        <div className='logo-container' >
          <img 
            src={capvalistypelogo} 
            alt="Company Logo"
            className='h-16 object-contain'
          />
        </div>
        <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-4'>
          <Button 
            sx={navButtonStyle}
          >
            Home
          </Button>
          
         <Button 
            sx={navButtonStyle}
          >
             <Link  to='about' spy={true} duration={500}  offset={10} smooth={true}>    
            About
            </Link>
          </Button>
          <Button 
            sx={navButtonStyle}
          onClick={sendtocareer} >
            Career
          </Button>
          <Link  to='ourservices' spy={true} duration={500}  offset={0} smooth={true}>    
          <Button 
            sx={navButtonStyle}
          >
            Our Services
          </Button>
          </Link>
          
          {/* <div className="flex gap-2"> */}
          {Showloginoption?(
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
              onClick={sendtologin}>
              Login
            </Button>
            ):(<Profilepage/>)}
            {/* <Button 
              variant="contained"
              sx={{
                backgroundColor: '#A5F3FC',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#7DD3FC', // slightly darker on hover
                },
              }}
            >
              Register
            </Button> */}
          {/* </div> */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;