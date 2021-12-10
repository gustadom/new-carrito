import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return (
        <>
            <ItemListContainer categoryId="MLA1367" categoryName="Antigüedades y Colecciones" />
            <ItemListContainer categoryId="MLA1071" categoryName="Animales y Mascotas" />
            <ItemListContainer categoryId="MLA1182" categoryName="Instrumentos Musicales" />
            <ItemListContainer categoryId="MLA3937" categoryName="Joyas y Relojes" />
            <ItemListContainer categoryId="MLA1168" categoryName="Música, Películas y Series" />
        </>
    )
}

export default Home
