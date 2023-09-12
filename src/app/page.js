import React from 'react';
import './styles.css'; 
import Navbar from '../components/layout/Navbar.js';
import CardDestaque from '../components/layout/CardDestaque.js';
import Title from '../components/layout/Title.jsx';
import CardMenor from '../components/layout/CardMenor.jsx';


//https://restcountries.com/v3.1/name/{name}


const lista_pais = ['france', 'switzerland']

async function carregarPaises(name){
  const url = `https://restcountries.com/v3.1/name/${name}`
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}

export default async function Home() {

  const paisesTotal = []

  for (let i = 0; i<lista_pais.length; i++){
    const pais = lista_pais[i];
    const paisDados = await carregarPaises(pais)
    paisesTotal.push(paisDados)
  }
  return (
    <>
      <div className="background">
        <Navbar/>
        <CardDestaque/>
      </div>
      <Title>Destinos</Title>
      <section className="flex flex-wrap" style={{marginLeft: '18rem', marginTop: '1rem'}}>
        {paisesTotal.map((destino)=>{
          return <CardMenor dados={destino[0]}/>
        })}
      </section>

      <Title>Hotéis</Title>
    </>
  );
}
