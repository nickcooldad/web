import { useParams } from "react-router-dom";
import {СocktailTable} from '../CocktailTable/CocktailTable.tsx'
import {         cocktailCodes } from "../../domain/core/cocktailCodes.ts";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage.tsx";

export function CocktailPage(){

    const {cocktail} = useParams()
    
    if(!cocktail || !cocktailCodes.includes(cocktail)) return <NotFoundPage/>

    return <СocktailTable drinkType={cocktail}/>
}