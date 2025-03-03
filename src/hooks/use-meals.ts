import { useQuery } from "@tanstack/react-query";
import { mealService } from "@/services/mealService";

export const useAllList = () => {
    return useQuery({
        queryKey: ["meal-list"],
        queryFn: () => mealService.getAllMeals(),
    })
}

export const useRandomMealLists = (count: number) => {
    return useQuery({
        queryKey: ["meal-random-list"],
        queryFn: () => mealService.getRandomMeals(count),
    })
}

export const useMealsByName = (name: string) => {
    return useQuery({
        queryKey: ["meal-search", name],
        queryFn: () => mealService.searchMealsByName(name),
        enabled: !!name,
    });
};

export const useMealById = (id: string) => {
    return useQuery({
        queryKey: ["meal-id", id],
        queryFn: () => mealService.getMealById(id),
        enabled: !!id,
    });
};

export const useMealCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: mealService.getCategories,
    });
};

export const useMealByCategory = (category: string) => {
    return useQuery({
        queryKey: ["category-id", category],
        queryFn: () => mealService.getMealsByCategory(category),
        enabled: !!category,
    });
}