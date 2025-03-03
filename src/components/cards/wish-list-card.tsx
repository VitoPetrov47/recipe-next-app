"use client";

import { Meal } from "@/types/meal";
import { useDispatch } from "react-redux";
import { removeMeal } from "@/reducer/wishListSlice";
import Image from "next/image";
import IngredientsAccordion from "./ui/accordion-ui";
import AlertRemoveButton from "./ui/alert-dialog-ui";

interface ICard {
    meal: Meal;
}

export default function WishListCard({ meal }: ICard) {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeMeal(meal.idMeal));
    };

    const ingredients = [] as string[];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient as string);
        }
    }

    return (
        <div className="bg-[#F7F7E3] rounded-md w-full p-4">
            <div className="flex justify-between items-start gap-4 mb-4">
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={200}
                    height={200}
                    objectFit="contain"
                    className="rounded-md"
                />
                <div>
                    <h3 className="text-[18px] font-bold text-left">{meal.strMeal}</h3>
                    <p className="text-left">- {meal.strCategory}</p>
                    <p className="text-left">- {meal.strArea}</p>
                </div>
            </div>

            <IngredientsAccordion
                ingredients={ingredients}
                instructions={meal.strInstructions}
            />

            <div className="w-full py-4">
                <AlertRemoveButton onRemove={handleRemove} />
            </div>
        </div>
    );
}