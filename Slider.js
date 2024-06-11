import React, { useState, useEffect } from 'react';
import './App.css'; 

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние текущего слайда

  const images = [
   'https://static20.tgcnt.ru/posts/_0/5e/5e9acfc3acdd21208d213172dff47739.jpg',
    'http://images1.resources.foxtel.com.au/store2/mount1/16/3/8g51h.jpg',
    'https://i.pinimg.com/originals/b8/3e/53/b83e535aaf4d72eebec106944bb06094.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Эффект для автоматического перелистывания слайдов каждые 2 секунды
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img className="slider-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
};

export default Slider;
