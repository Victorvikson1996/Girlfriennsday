// src/App.tsx

import React from 'react';
import Card from './components/Card';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import image1 from './images/1.jpg';
import image2 from './images/2.png';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.png';

const App: React.FC = () => {
  const notes = [
    "Irene, you're the light that brightens my darkest days. Your beauty is a reflection of your amazing heart.",
    'Being with you is like a dream come true. Every moment with you feels like a precious gift.',
    "Your smile is the most beautiful and gorgeous sight I've ever seen. It lights up my world.",
    "My most beautiful Irene, you make my heart race and my soul sing. I'm so grateful to have you.",
    'Heaven will ask me what I did with my time; I will tell them I spent my life loving you, Irene.'
  ];

  const colors = ['#f8b400', '#c7dfc5', '#8acb88', '#457b9d', '#a8dadc'];

  // const images = [
  //   '/images/1.JPEG',
  //   '/images/2.PNG',
  //   '/images/3.JPEG',
  //   '/images/4.JPEG',
  //   '/images/5.PNG'
  // ];

  const images = [image1, image2, image3, image4, image5];

  return (
    <div className='app'>
      <div className='header'>
        <h1>Happy Girlfriend's Day Irene ❤️🌹</h1>
      </div>
      {notes.map((note, index) => (
        <React.Fragment key={index}>
          <AnimatePresence>
            <motion.div
              className='background'
              style={{
                backgroundImage: `url(${images[index]})`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: index * 3 }}
            />
          </AnimatePresence>
          <motion.div
            className='card-container'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: index * 3 + 1.5 }} // Ensures cards appear with gaps
          >
            <Card note={note} color={colors[index]} />
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
