import React from 'react'
import Item from './Item'

const ItemListLoader = () => {
    return (
        <>
            <div className="ui cards">
                {
                    [...new Array(4)].map((_, index) => (
                        <div className="four wide column" key={index}>
                            <Item item={{
                                id: 0,
                                title: 'Cargando...',
                                thumbnail: 'https://i.stack.imgur.com/ATB3o.gif',
                                price: '',
                                categoryId: ''
                            }} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ItemListLoader
