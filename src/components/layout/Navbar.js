import React from 'react';
import './Navbar.css'; // Arquivo de estilos para a navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <span className="title">Fiap Viagens</span>
      </div>
      <div className="right-section">
        <button className="nav-button">Passagens</button>
        <button className="nav-button">Hotéis</button>
        <button className="nav-button">Sobre</button>
        <button className="nav-button">Agende sua Viagem</button>
      </div>
    </div>
  );
};

export default Navbar;
