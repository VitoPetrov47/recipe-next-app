"use client";

import { useMealById } from "@/hooks/use-meals";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const id = params.id as string; // Type assertion to string

    const { data: meal, isLoading, error } = useMealById(id);

    // Log the meal data for debugging
    console.log('meal: ', meal);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки данных</p>;
    if (!meal) return <p>Блюдо не найдено</p>;

    const navlinks = {
        scLinkName: meal.strMeal,
    };

    return (
        <>
            <Breadcrumb navlinks={navlinks} />
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
        </>
    );
}