"use client";

import { useMealById } from "@/hooks/use-meals";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { useParams } from 'next/navigation';
import Image from "next/image";
export default function Page() {
    const params = useParams();
    const id = params.id as string;

    const { data: meal, isLoading, error } = useMealById(id);

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
            <Image
                src={meal.strMealThumb}
                width={200}
                height={200}
                objectFit="contain"
                alt={meal.strMeal}
            />
        </>
    );
}