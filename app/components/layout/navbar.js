import styles from './Navbar.css';

import React from 'react';

const NavBar = () => {
  return (
    <div className="flex p-4 bg-transparent">
      <div className="flex items-center justify-between w-full">
        <a href="#" className="text-white font-bold text-xl">
          FiapViagens
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white">Passagens</a>
          </li>
          <li>
            <a href="#" className="text-white">Hotéis</a>
          </li>
          <li>
            <a href="#" className="text-white">Sobre</a>
          </li>
          <li>
            <a href="#" className="text-white">Agende sua viagem</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
