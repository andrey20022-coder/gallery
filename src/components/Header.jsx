import { useState, useEffect } from 'react';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

export default function Header({ isLight, toggleTheme }) {
  return (
    <header>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isLight ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
}