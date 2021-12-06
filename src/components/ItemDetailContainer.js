import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Nike&limit=1`)
                .then(response => response.json())
                .then(respJSON => { setItem(respJSON.results[0]); setLoading(false) })
                .catch(error => console.log('Error:', error))
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ?
                    <h5>Cargando detalle de producto...</h5>
                    :
                    <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailContainer