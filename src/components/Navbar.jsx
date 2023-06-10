import React from 'react';
import { ProgressBar } from './ProgressBar';

export const Navbar = () => {
  return (
    <nav>
      <img className='logo' src="./public/logo.png" alt="" />
      <ProgressBar />
    </nav>
  );
};
