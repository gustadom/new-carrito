import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import ItemListLoader from './ItemListLoader';

const ItemListContainer = ({ categoryId, categoryName }) => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=4`)
                .then(response => response.json())
                .then(respJSON => { console.log(respJSON.results); setItems(respJSON.results); setLoading(false); })
                .catch(error => console.log('Error: ', error))
        }, 2000)
    }, [categoryId])

    return (
        <div>
            <h1>{categoryName}</h1>
            {
                loading ?
                    <ItemListLoader />
                    :
                    <ItemList items={items} />
            }

        </div>
    )
}

export default ItemListContainer
