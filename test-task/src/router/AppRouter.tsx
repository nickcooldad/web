import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CoctailTable } from "../components/CoctailTable/CoctailTable";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { coctail_code } from "../response/cocktail_code";

export function AppRouter(){
    const firstMenuItem = coctail_code[0]

    return(
     <Router>
        <Routes>
            {<Route path="/" element={<Navigate to={`/${firstMenuItem}`} replace/>}/>}
            {coctail_code.map((coctailName) => 
            <Route
                key={coctailName}
                path={`/${coctailName}`}
                element={<CoctailTable />}
            />
            )}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
     </Router>)
}