import { Meal } from "@/types/meal";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addMeal } from "@/reducer/wishListSlice";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ICard {
    meal: Meal;
}

export default function Card({ meal }: ICard) {
    const dispatch = useDispatch();

    const handleAddMeal = () => {
        dispatch(addMeal(meal));
    };

    return (
        <div className="bg-[#F7F7E3] rounded-md w-[280px] h-[400px] flex flex-col">
            <Link href={`/${meal.idMeal}`} className="flex-1 relative">
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-md"
                />
            </Link>
            <div className="p-4 flex flex-col justify-between flex-1 rounded-b-md">
                <h3 className="text-left">{meal.strMeal}</h3>
                <p className="text-left">{meal.strCategory}</p>
                <p className="text-left">{meal.strArea}</p>
                <Button className="cursor-pointer w-full" onClick={handleAddMeal}>Add</Button>
            </div>
        </div>
    );
}