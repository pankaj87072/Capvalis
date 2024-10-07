// import logo from './logo.svg';
import './App.css';
// import AnimatedPage from './AnimatedPage';
import HomePage from './pages/HomePage'; 
import { HelmetProvider } from 'react-helmet-async';
// import CandleAnimation from './CandleAnimation';
function App() {
  return (
    <div className="App">
      {/* <AnimatedPage/> */}
      {/* <CandleAnimation/> */}
      <HelmetProvider>
        {/* Your app content */}
      <HomePage/>
    </HelmetProvider>
    </div>
  );
}

export default App;
