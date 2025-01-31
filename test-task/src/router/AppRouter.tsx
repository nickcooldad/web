import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { СocktailTable } from "../components/CoctailTable/CoctailTable";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { cocktail_code } from "../response/cocktail_code";

export function AppRouter(){
    const firstMenuItem = cocktail_code[0]

    return(
     <Router>
        <Routes>
            {<Route path="/" element={<Navigate to={`/${firstMenuItem}`} replace/>}/>}
            {cocktail_code.map((coctailName) => 
            <Route
                key={coctailName}
                path={`/${coctailName}`}
                element={<СocktailTable />}
            />
            )}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
     </Router>)
}