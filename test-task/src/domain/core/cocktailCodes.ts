export const cocktailCodes = ["margarita", "mojito", "a1", "kir"] as const;
export type CocktailCode = typeof cocktailCodes[number];

// data → api → redux → react
