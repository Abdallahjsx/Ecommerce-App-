export type getProductsShopParams = {
    pageIndex: number;
    filters: FiltersState
}
export type FiltersState = {
    mainCategory: mainCategoryType | null;
    subCategories: string[] | null;
    priceRange: number[] | null;
    stockStatus: string | null;
    size: sizeType | null;
    colors: colorType[] | null;
    Search: string | undefined;
    SortItem: sortOptionType | null
}
export type mainCategoryType = {
    id: string,
    name: string,
    arName: string
}
export type colorType = {
    hexCode: string,
    id: number,
    name: string,
    arName: string
}
export type sortOptionType = {
    label: string,
    SortBy: string,
    SortOrder: string
}
export type sizeType = {
    id: number,
    name: string,
    arName: string
}