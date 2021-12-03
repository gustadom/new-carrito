import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <>
            <div className="ui grid">

                {

                    items.map((item) => (
                        <div className="four wide column">
                            <Item item={item} key={item.id} />
                        </div>

                    ))


                }

            </div>
        </>
    )
}

export default ItemList
