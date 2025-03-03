"use client";

import { useRandomMealLists, useMealsByName } from "@/hooks/use-meals";
import { Meal } from "@/types/meal";
import CategoryFilterBar from "@/components/filterBar/category-filter-bar";
import SearchBar from "@/components/filterBar/search-bar";
import { useState } from "react";
import Card from "@/components/cards/Card";
import IsEmptyList from "@/components/is-empty-list";
import { PaginationCustomList } from "@/components/pagination";

const ITEMS_PER_PAGE = 12;

export default function MealList() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const { data: searchMeals } = useMealsByName(search);
    const { data: randomMealList, isLoading, error } = useRandomMealLists(72);
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки данных</p>;

    const mealsToDisplay = search ? searchMeals : randomMealList;

    const filteredMeals =
        selectedCategory === "All"
            ? mealsToDisplay
            : mealsToDisplay?.filter((meal: Meal) => meal.strCategory === selectedCategory); // Фильтруем по выбранной категории

    const totalPages = Math.ceil((filteredMeals?.length || 0) / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedMeals = filteredMeals?.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={"flex flex-col md:flex-row justify-start items-center gap-5 mb-4 w-full"}>
                <CategoryFilterBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                <SearchBar onSearch={setSearch} />
            </div>
            {paginatedMeals?.length ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {paginatedMeals.map((meal: Meal) => (
                            <Card key={meal.idMeal} meal={meal} />
                        ))}
                    </div>
                    <PaginationCustomList
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <IsEmptyList text={"There is nothing"} />
            )}
        </>
    );
}