import React from 'react';
import './App.css';
import Section from './Section'; 

const Header = () => {
  return (
    <header className="header1">
      <h1>DIGITAL <span className="pro">PRO</span></h1>
      <div className="App">
       <div className="sections">
        <Section
          number="01"
          title="EXPERTISE"
          text="Our team consists of professionals who have many years of experience in the field of online marketing. We understand all the subtleties and trends of this rapidly changing world."
          icon="📈"
        />
        <Section
          number="02"
          title="RANGE OF SERVICES"
          text="DigitalPro offers a full range of online advertising services so you can find everything you need in one place."
          icon="🔧"
        />
        <Section
          number="03"
          title="EFFECTIVENESS"
          text="Our goal is not just to advertise, but to achieve concrete results. We work for your success and are confident in achieving your goals."
          icon="🎯"
        />
       </div>
      </div> 
    </header>
  );
}

export default Header;
