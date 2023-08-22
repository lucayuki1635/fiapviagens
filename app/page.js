import React from 'react';
import './styles.css'; 
import NavBar from './components/layout/navbar';
import Card from './components/layout/cards';

export default function Home() {
  return (
    <div className="background">
      <NavBar />
      <Card/>
    </div>
  );
}
