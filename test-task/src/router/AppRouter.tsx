import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { СocktailTable } from "../components/CoctailTable/CoctailTable";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { cocktailCodes } from "../domain/core/cocktailCodes";

export function AppRouter() {
    const firstMenuItem = cocktailCodes[0]

    return (
        <Router>
            <Routes>
                {<Route path="/" element={<Navigate to={`/${firstMenuItem}`} replace />} />}
                {cocktailCodes.map((coctailName) =>
                    <Route
                        key={coctailName}
                        path={`/${coctailName}`}
                        element={<СocktailTable />}
                    />
                )}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>)
}