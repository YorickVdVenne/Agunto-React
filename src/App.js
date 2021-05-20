import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SuccessPage from './pages/SuccessPage';
import DesktopPage from './pages/DesktopPage';
import MobilePage from './pages/MobilePage';

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [onSuccess, setOnSuccess] = useState(false)

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      {onSuccess 
        ? <SuccessPage />
        : windowDimensions.width >= 769 && windowDimensions.height >= 769 
          ? <DesktopPage onSuccess={(status) => {status === true ? setOnSuccess(true) : setOnSuccess(false)}}/>
          : <MobilePage onSuccess={(status) => {status === true ? setOnSuccess(true) : setOnSuccess(false)}}/>
      }
    </div>
  );
}

export default App;
