"use client"
import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const paises = [
    {
        pais : 'France',
        image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg"
    },
    { pais : 'Switzerland',
      image: "https://www.qualviagem.com.br/wp-content/uploads/2016/09/iStock_86150945_SMALL.jpg"
    },
  
  ] 


function encontrarPais(nome){
    return paises.find(pais => pais.pais == nome);
}


export default function CardMenor({dados}){
    const [favorito, setFavorito] = useState(false)
    const paisAchado = encontrarPais(dados.name.common)
    console.log(paisAchado)
    return(
    <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        {favorito ?
            <HeartIcon onClick={()=> setFavorito(false)} className="h-6 w-6 text-rose-600" />
            :
            <HeartIcon onClick={()=> setFavorito(true)} className="h-6 w-6 text-slate-100" />
        }
        
        <img className='rounded' src={paisAchado.image} alt="" style={{width:'150px', height: '200px'}}/>
        <span className='text-purple-100 font-bold text-center line-clamp-1'>{dados.translations.por.common}</span>
        <div>
            <span className='text-purple-100'>{dados.capital}</span>
        </div>
        <a href={dados.maps.googleMaps} className='py-2 w-full rounded text-center'>
            Ver no Mapa
        </a>
    </div>
    )
}