import React from 'react';
import './styles.css'; 
import Navbar from '../components/layout/Navbar.jsx';
import CardDestaque from '../components/layout/CardDestaque.js';
import Title from '../components/layout/Title.jsx';
import CardMenor from '../components/layout/CardMenor.jsx';


//https://restcountries.com/v3.1/name/{name}

async function carregarPaises(name){
  const url = `https://restcountries.com/v3.1/name/${name}`
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}

async function carregarDadosPaises(){
  const url = `http://localhost:3001/imagem`
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}

export default async function Home() {
  const paisesDados = await carregarDadosPaises();
  const paisesTotal = []

  for (let i = 0; i<paisesDados.length; i++){
    const pais = paisesDados[i];
    
    const paisDados = await carregarPaises(pais.pais)
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
          return <CardMenor dados={destino[0]} dadosPaises={paisesDados}/>
        })}
      </section>
    </>
  );
}
