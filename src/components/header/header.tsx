import React from 'react'

import BackgroundImage from '../../assets/img/meals.jpg'
import { MainImage, StyledHeader } from './header.styles'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <StyledHeader>
                <h1>React Meals</h1>
                <button>Cart</button>
            </StyledHeader>
            <MainImage>
                <img src={BackgroundImage} alt="A table full of food!" />
            </MainImage>
        </>
    )
}

export { Header }