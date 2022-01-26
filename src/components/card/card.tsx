import React, { ReactNode } from 'react'
import { StyledCard } from './card.styles'

type CardProps = {
    children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <StyledCard>{children}</StyledCard>
    )
}

export { Card }