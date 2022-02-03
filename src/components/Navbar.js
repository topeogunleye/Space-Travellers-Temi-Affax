import React from 'react';
import { NavLink } from 'react-router-dom';
import planet2 from '../images/planet.png';

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
    <header className="">
      <nav className="md:flex flex-col md:flex-row justify-between items-center">
        <div className="flex  justify-between items-center w-72">
          <img className="w-12" src={planet2} alt="planet logo" />
          <h1 className="font-bold text-xl">Space Travellers Hub</h1>
        </div>
        <ul className="flex justify-between items-center w-56 text-blue-600 divide-x-2-black ">
          {links.map((item) => (
            <li key={item.id} className="">
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : '#545e6f',
                })}
                className="navlink"
              >
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
