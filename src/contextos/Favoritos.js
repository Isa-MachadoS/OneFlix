import React, { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
        } else {
            novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        }

        setFavorito(novaLista);
    }

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito, adicionarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritoContext(){
    return useContext(FavoritosContext);
}
