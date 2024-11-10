import React from 'react'
import { useFirebase } from '../context/Firebase';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


const Profilepage = () => {
  // const navigate=useNavigate()
  // const navtologin=()=>{
    
  //   logout.signout();
  //   navigate('/');
  // }
  const logout=useFirebase();
  return (
    // <div className='w-10 h-10 border border-black bg-white rounded-3xl' onClick={logout.signout}>
      
    // </div>
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
    onClick={logout.signout}>
      Logout
      </Button>
  )
}

export default Profilepage;
