import { useParams } from "react-router-dom";
import {СocktailTable} from '../CocktailTable/CocktailTable.tsx'
import {CocktailCode, cocktailCodes } from "../../domain/core/cocktailCodes.ts";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage.tsx";

export function CocktailPage(){

    const {cocktail} = useParams()
    
    if(!cocktail || !cocktailCodes.includes(cocktail as CocktailCode)) return <NotFoundPage/>

    return <СocktailTable drinkType={cocktail as CocktailCode}/>
}