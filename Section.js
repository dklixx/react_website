import React from 'react';
import './App.css';

const Section = ({ number, title, text, icon }) => {
  return (
    <section className="section">
      <div className="icon">{icon}</div>
      <div className="content">
        <h2>{number} {title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Section;
