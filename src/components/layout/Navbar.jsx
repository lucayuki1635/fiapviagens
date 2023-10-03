"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import './Navbar.css';
import { serverLogout } from '@/app/actions/user';


const Navbar = () => {
  const {push} = useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }

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
        <button className="nav-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
