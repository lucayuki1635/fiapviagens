import { useState } from "react";

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)

    function favoritar(pais){
        const id = pais.id; 
        fetch(`http://localhost:3001/favoritos/${id}`)
            .then((response) => response.json())
            .then((data) => {
            if (data && data.id === id) {
              
                setFavorito(true);

                const options = {
                method: 'PUT',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ id: id,
                    nome: pais.nome, 
                    favoritado: true,}),
                };
                fetch(`http://localhost:3001/favoritos/${id}`, options)
                .then((response) => response.json())
                .then((response) => console.log(response))
                .catch((err) => console.error(err));
            } else {
                const novoPais = {
                id: id,
                nome: pais.nome, 
                favoritado: true,
                };

                const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                },
                body: JSON.stringify(novoPais),
                };

                fetch('http://localhost:3001/favoritos', options)
                .then((response) => response.json())
                .then((response) => {
                    setFavorito(true);
                    console.log(response);
                })
                .catch((err) => console.error(err));
            }
            })
            .catch((err) => console.error(err));
    }

    function desfavoritar(pais) {
        const id = pais.id;
        setFavorito(false);
    
        const options = {
          method: 'PUT',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({id: id,
            nome: pais.nome, 
            favoritado: false,}),
        };
    
        fetch(`http://localhost:3001/favoritos/${id}`, options)
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
      }


      return { favoritar, desfavoritar, favorito };

}