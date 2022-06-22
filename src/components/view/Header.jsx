import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div className='header' style={{ backgroundColor: isDark ? '#000' : "#ddd", color: isDark ? "#fff" : "#000" }}>
      <h1>Hello {user}!</h1>
    </div>
  );
};