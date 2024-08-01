// src/Card.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  note: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ note, color }) => {
  return (
    <motion.div
      className='card'
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
    >
      <p>{note}</p>
    </motion.div>
  );
};

export default Card;
