import React from 'react';
import { Hero } from '../components/Hero';
import { Values } from '../components/Values';
import { Vision } from '../components/Vision';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Values />
      <Vision />
    </div>
  );
};