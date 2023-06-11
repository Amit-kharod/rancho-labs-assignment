import React from 'react';
import { ProgressBar } from './ProgressBar';

export const Navbar = () => {
  return (
    <nav>
      <img className='logo' src="./public/imgs/logo.png" alt="" />
      <ProgressBar />
    </nav>
  );
};
