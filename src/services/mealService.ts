import axios from "axios";
import {Category} from "@/types/category";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const mealService = {
    searchMealsByName: async (name: string) => {
        const { data } = await axios.get(`${API_URL}/search.php?s=${name}`);
        return data.meals;
    },
    getMealById: async (id: string) => {
        const { data } = await axios.get(`${API_URL}/lookup.php?i=${id}`);
        return data.meals[0];
    },
    getMealsByCategory: async (category: string) => {
        const { data } = await axios.get(`${API_URL}/filter.php?c=${category}`);
        return data.meals;
    },
    getCategories: async () => {
        const { data } = await axios.get(`${API_URL}/categories.php`);
        return data.categories;
    },
    getRandomMeals: async (count: number) => {
        const seenMealIds = new Set();
        const meals = [];

        while (meals.length < count) {
            const response = await axios.get(`${API_URL}/random.php`);
            const meal = response.data.meals[0];

            if (!seenMealIds.has(meal.idMeal)) {
                meals.push(meal);
                seenMealIds.add(meal.idMeal);
            }
        }

        return meals;
    },
    /*getAllMeals gets more than 300-s elements with brief info: mealId, strMeal, strMealThumb*/
    /*that case is not optimization so better use getRandomMeals*/
    getAllMeals: async () => {
        const { data: categoriesData } = await axios.get(`${API_URL}/categories.php`);
        const categories = categoriesData.categories.map((cat: Category) => cat.strCategory);

        const meals = await Promise.all(
            categories.map(async (category: string) => {
                const { data } = await axios.get(`${API_URL}/filter.php?c=${category}`);
                return data.meals;
            })
        );

        return meals.flat();
    }
};