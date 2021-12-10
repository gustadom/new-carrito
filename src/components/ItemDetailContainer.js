import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const [loading, setLoading] = useState(true)

    const params = useParams()


    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${params.id}`)
                .then((response) => response.json())
                .then(respJSON => { console.log(respJSON); setItem(respJSON); setLoading(false) })
                .catch(error => console.log('Error:', error))
        }, 0)
    }, [params.id])

    return (
        <>
            {
                loading ?
                    <h5>Cargando detalle de producto...</h5>
                    :
                    <div className='container'>
                        <div className='contain'>
                            <ItemDetail item={item} />
                        </div>
                    </div>

            }
        </>
    )
}

export default ItemDetailContainer