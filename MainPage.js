import React from 'react';
import '../App.css'; 

const MainPage = () => {
  return (
    <div className="container">
      <div className="header">EFFICIENT MARKETING</div>
      <div className="subheader">SOLUTIONS</div>
      <div className="description">
        We help businesses and personal brands to find their way in the digital space by creating efficient strategies and increasing their online influence.
      </div>
      <div className="clients">
        <span>45</span> active clients on an ongoing basis
      </div>
      <a className="contact-button" href='https://risovach.ru/upload/2013/11/mem/dobbi_35604504_orig_.jpeg' target='_blank' alt="button">CONTACT US</a>
    </div>
  );
};

export default MainPage;
