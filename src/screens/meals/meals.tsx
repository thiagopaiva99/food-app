import React from 'react'
import { AvailableMeals } from './components/available-meals/available-meals'
import { MealsSummary } from './components/meals-summary/meals-summary'

type MealsProps = {}

const Meals: React.FC<MealsProps> = () => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    )
}

export { Meals }