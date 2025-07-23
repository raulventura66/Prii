import React from 'react';
import { Team } from '../components/Team';
import { Departments } from '../components/Departments';

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Team />
      <Departments />
    </div>
  );
};