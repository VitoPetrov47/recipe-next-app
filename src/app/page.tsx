import MealList from "@/components/mealList/meal-list";

export default function Home() {
  return (
    <div className={"flex flex-col justify-center items-center w-full"}>
      <MealList />
    </div>
  );
}
