import React from 'react'
import { StyledMealItem, StyledMealItemDescription, StyledMealItemPrice, StyledMealItemTitle } from './meal-item.styles'

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number,
}

type MealItemProps = {
    meal: Meal
}

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
    const formatPrice = (price: number) => `$${price.toFixed(2)}`
    return (
        <StyledMealItem>
            <div>
                <StyledMealItemTitle>{meal.name}</StyledMealItemTitle>
                <StyledMealItemDescription>{meal.description}</StyledMealItemDescription>
                <StyledMealItemPrice>{formatPrice(meal.price)}</StyledMealItemPrice>
            </div>
            <div>

            </div>
        </StyledMealItem>
    )
}

export { MealItem }