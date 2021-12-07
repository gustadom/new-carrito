import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer';

const Category = () => {
    const params = useParams();
    return (
        <>
            <ItemListContainer CategoryId={params.id} />
        </>
    )
}

export default Category
