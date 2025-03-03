export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
}

export interface CategoryResponse {
    categories: Category[] | null;
}