import { useState } from "react";

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)

    function favoritar(pais){
        setFavorito(true)
        
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            },
            body: JSON.stringify({nome: pais.nome, favoritado: true})
        };
        
        fetch('http://localhost:3001/favoritos', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function desfavoritar(pais){
        setFavorito(false)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            },
            body: JSON.stringify({nome: pais.nome, favoritado: false,})
        };
        
        fetch('http://localhost:3001/favoritos', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }


      return { favoritar, desfavoritar, favorito };

}