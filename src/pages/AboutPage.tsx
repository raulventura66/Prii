import React from 'react';
import { About } from '../components/About';
import { Differentials } from '../components/Differentials';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <About />
      <Differentials />
    </div>
  );
};