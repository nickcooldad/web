import { useParams } from "react-router-dom";
import {СocktailTable} from '../CocktailTable/CocktailTable.tsx'
import { isCocktailCode } from "../../domain/core/cocktailCodes.ts";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage.tsx";

export function CocktailPage(){

    const {cocktail} = useParams()
    
    if(cocktail === undefined || !isCocktailCode(cocktail)) {
        return <NotFoundPage/>
    }

    return <СocktailTable drinkType={cocktail}/>

}

