"use client"
import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useFavorito from '@/hooks/destinos'



function encontrarPais(nome, paises){
    return paises.find(pais => pais.pais == nome);
}


export default function CardMenor({dados, dadosPaises}){
    const { favorito, desfavoritar, favoritar } = useFavorito()
    const paisAchado = encontrarPais(dados.name.common, dadosPaises)
    const dadosPais = {
        id : paisAchado.id,
        nome: dados.name.common
    }
    return(
    <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        {favorito ?
            <HeartIcon onClick={()=> desfavoritar(dadosPais)} className="h-6 w-6 text-rose-600" />
            :
            <HeartIcon onClick={()=> favoritar(dadosPais)} className="h-6 w-6 text-slate-100" />
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