import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className='footer' style={{ backgroundColor: isDark ? "#000" : "#ddd" }}>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
};