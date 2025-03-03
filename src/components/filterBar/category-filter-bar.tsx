"use client";

import { useMealCategories } from "@/hooks/use-meals";
import { Category } from "@/types/category";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CategoryFilterBarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CategoryFilterBar({ selectedCategory, onCategoryChange }: CategoryFilterBarProps) {
    const { data: categories } = useMealCategories();

    return (
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="All">All</SelectItem>
                    {categories?.map((category: Category) => (
                        <SelectItem key={category.strCategory} value={category.strCategory}>
                            {category.strCategory}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};