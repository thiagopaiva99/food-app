import React from 'react'
import { Card } from '../../../../components'
import { DUMMY_MEALS } from './available-meals.data'
import { StyledMealsList, StyledMealsSection } from './available-meals.styles'

type AvailableMealsProps = {}

const AvailableMeals: React.FC<AvailableMealsProps> = () => {
    return (
        <StyledMealsSection>
            <Card>
                <StyledMealsList>
                    {DUMMY_MEALS.map(meal => (
                        <li key={meal.id}>{meal.description}</li>
                    ))}
                </StyledMealsList>
            </Card>
        </StyledMealsSection>
    )
}

export { AvailableMeals }