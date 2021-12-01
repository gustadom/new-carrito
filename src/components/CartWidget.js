import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faBeer} size="2x" color="dark" />
        </div>
    )
}

export default CartWidget;
