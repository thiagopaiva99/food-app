import React, { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export { Card }