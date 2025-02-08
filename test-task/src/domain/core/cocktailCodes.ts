export const cocktailCodes = ["margarita", "mojito", "a1", "kir"] as const;
export type CocktailCode = typeof cocktailCodes[number];

export function isCocktailCode(str: string): str is CocktailCode {
    return (cocktailCodes as readonly string[]).includes(str)
}