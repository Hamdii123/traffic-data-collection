import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import url1 from '../../soc1.jpg';
import url2 from '../../soc2.jpg';

const HomePage = () => {
  const images = [url1, url2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    color: '#fff',
    transition: 'background-image 1s ease-in-out', // Add smooth transition
  };
  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const sloganStyle = {
    fontSize: '24px',
    marginBottom: '30px',
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  };

  const buttonContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '3px solid #fff',
    borderRadius: '15px',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '20px',
    margin: '10px',
    cursor: 'pointer',
  };


  const switchImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  useEffect(() => {
    const intervalId = setInterval(switchImage, 5000); 

  
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div style={backgroundStyle} className="background-container">
      <div style={overlayStyle}></div>
      <div style={buttonContainerStyle}>
      <div style={headerStyle}>Welcome aboard!</div>
        <div style={sloganStyle}>
          Drive SAFE: Navigating Roads, Ensuring Lives.
        </div>
        <Link to="/report">
          <button style={buttonStyle}>Report an Incident</button>
        </Link>
        <Link to="http://localhost:8082/traffic.html">
          <button style={buttonStyle}>Consult Traffic</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
