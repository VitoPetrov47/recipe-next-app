import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '@/types/meal';

interface WishListState {
    meals: Meal[];
}

const initialState: WishListState = {
    meals: [],
};

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addMeal: (state, action: PayloadAction<Meal>) => {
            const mealExists = state.meals.some(meal => meal.idMeal === action.payload.idMeal);

            if (!mealExists) {
                state.meals.push(action.payload);
            }
        },
        removeMeal: (state, action: PayloadAction<string>) => {
            state.meals = state.meals.filter(meal => meal.idMeal !== action.payload);
        },
    },
});

export const { addMeal, removeMeal } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;