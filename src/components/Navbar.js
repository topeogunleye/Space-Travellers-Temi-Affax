import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/MyProfile',
      text: 'MyProfile',
    },
  ];

  return (
    <header className="header">
      <nav>
        <img src={planet} alt="planet logo" />
        <h1>Space Travellers Hub</h1>
        <ul>
          {links.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} className="navlink">
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
