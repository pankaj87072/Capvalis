// import logo from './logo.svg';
import './App.css';
import AnimatedPage from './pages/AnimatedPage';
import HomePage from './pages/HomePage'; 
import { HelmetProvider } from 'react-helmet-async';
import Transaction from './pages/Transaction';
import { useState } from 'react';
// import CandleAnimation from './CandleAnimation';
function App() {
  const [isAnimation,setIsAnimation]=useState(true);
  setTimeout(()=>{
    setIsAnimation(false);
  },7000);
  return (
    <div className="App">
      {isAnimation?<AnimatedPage/>:
      <HelmetProvider>
        {/* Your app content */}
      <HomePage/>
    </HelmetProvider>}
    {/* <Transaction/> */}
    
    </div>
  );
}

export default App;
