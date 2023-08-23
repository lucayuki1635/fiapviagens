import React from 'react';
import './styles.css'; 
import Navbar from '../components/layout/Navbar.js';
import Card from '../components/layout/cards.js';

export default function Home() {
  return (
    <div className="background">
      <Navbar/>
      <Card/>
    </div>
  );
}
