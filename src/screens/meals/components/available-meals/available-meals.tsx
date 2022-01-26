import React from 'react'
import { Card } from '../../../../components'
import { MealItem } from '../meal-item/meal-item'
import { DUMMY_MEALS } from './available-meals.data'
import { StyledMealsList, StyledMealsSection } from './available-meals.styles'

type AvailableMealsProps = {}

const AvailableMeals: React.FC<AvailableMealsProps> = () => {
    return (
        <StyledMealsSection>
            <Card>
                <StyledMealsList>
                    {DUMMY_MEALS.map(meal => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </StyledMealsList>
            </Card>
        </StyledMealsSection>
    )
}

export { AvailableMeals }