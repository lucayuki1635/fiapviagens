import React from 'react';
import './styles.css'; 
import Navbar from '../components/layout/Navbar.js';
import CardDestaque from '../components/layout/CardDestaque.js';
import Title from '../components/layout/Title.jsx';
import CardMenor from '../components/layout/CardMenor.jsx';

export default function Home() {
  const destinos = [
    {
      nome: "Paris",
      info: "Teste",
      image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg"
    },

    {
      nome: "Zurique",
      info: "Teste",
      image: "https://www.qualviagem.com.br/wp-content/uploads/2016/09/iStock_86150945_SMALL.jpg"
    },

  ] 


  return (
    <>
      <div className="background">
        <Navbar/>
        <CardDestaque/>
      </div>
      <Title>Destinos</Title>
      <section className="flex flex-wrap" style={{marginLeft: '18rem', marginTop: '1rem'}}>
        {destinos.map((destino)=>{
          return <CardMenor dados={destino}/>
        })}

        
      </section>

      <Title>Hotéis</Title>
    </>
  );
}
