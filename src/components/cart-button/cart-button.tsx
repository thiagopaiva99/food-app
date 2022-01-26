import React from 'react'
import { CartIcon } from '../icons'
import { StyledButton, StyledCartBadge, StyledCartIcon } from './cart-button.styles'

type CartButtonProps = {}

const CartButton: React.FC<CartButtonProps> = () => {
    return (
        <StyledButton>
            <StyledCartIcon><CartIcon /></StyledCartIcon>
            <span>Your cart</span>
            <StyledCartBadge>3</StyledCartBadge>
        </StyledButton>
    )
}

export { CartButton }