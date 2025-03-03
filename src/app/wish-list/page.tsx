'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Meal } from "@/types/meal";
import WishListCard from "@/components/cards/wish-list-card";
import Breadcrumb from "@/components/navigation/breadcrumb";
import IsEmptyList from "@/components/is-empty-list";

export default function WishList() {
    const meals = useSelector((state: RootState) => state.wishList.meals);

    const navlinks = {
        scLinkName: "Wish List",
    };

    return (
        <>
            <Breadcrumb navlinks={navlinks} />
            {meals.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    {meals.map((meal: Meal) => (
                        <WishListCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            ) : (
                <IsEmptyList text={"Your Wish List is Empty"} />
            )}
        </>
    );
}