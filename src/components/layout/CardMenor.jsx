"use client"
import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'


export default function CardMenor({dados}){
    const [favorito, setFavorito] = useState(false)
    return(
    <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        {favorito ?
            <HeartIcon onClick={()=> setFavorito(false)} className="h-6 w-6 text-rose-600" />
            :
            <HeartIcon onClick={()=> setFavorito(true)} className="h-6 w-6 text-slate-100" />
        }
        
        <img className='rounded' src={dados.image} alt="" style={{width:'150px', height: '200px'}}/>
        <span className='text-purple-100 font-bold text-center line-clamp-1'>{dados.nome}</span>
        <div>
            <span className='text-purple-100'>{dados.info}</span>
        </div>
        <a href="#" className='py-2 w-full rounded text-center'>
            Detalhes
        </a>
    </div>
    )
}