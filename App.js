import React, { useState } from 'react';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer'; 
import Slider from './components/Slider';

import './App.css';

function App() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light")); 
  };

  return (
    <div className="App" id={theme}>
      <header>
        <div className="theme-switcher">
          <p className="change-text">{theme} mode</p>
          <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
          <label htmlFor="toggle-btn" className="toggle-label"></label>
        </div>
      </header>
      <MainPage />
      <Header />
      <Slider/>
      <Footer />
      <Section />
    </div>
  );
}

export default App; 
