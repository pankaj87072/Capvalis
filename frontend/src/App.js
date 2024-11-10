import './App.css';
import AnimatedPage from './pages/AnimatedPage';
import HomePage from './pages/HomePage'; 
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Transaction from './pages/Transaction';
import Career from './pages/Career';
import Plans from './pages/Plans';
import Checkout from './pages/CheckoutPage';

function App() {
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimation(false);
    }, 7000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isAnimation ? (
          <AnimatedPage />
        ) : (
          <HelmetProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Career" element={<Career/>}/>
              <Route path="/Plans" element={<Plans/>}/>
              <Route path="/Checkout" element={<Checkout/>}/>
            </Routes>
            
          </HelmetProvider>
        )}
      </div>
    </BrowserRouter>
    // <Transaction/>
    
  );
}

export default App;
