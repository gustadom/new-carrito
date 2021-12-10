import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <>
            <Link to={`/item/${item.id}`}>
                <div className="ui cards">
                    <div className="card">
                        <div className="image">
                            <img src={item.thumbnail} alt="imagen" />
                        </div>
                        <div className="content">
                            <div className="header">${item.price}</div>
                            <div className="meta">{item.category_id}</div>
                            <div className="description">{item.title}</div>
                        </div>
                    </div >
                </div >
            </Link>
        </>
    )
}

export default Item