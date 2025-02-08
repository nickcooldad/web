import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CocktailPage } from "../components/CocktailPage/CocktailPage";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { cocktailCodes } from "../domain/core/cocktailCodes";

export function AppRouter() {
  const firstMenuItem = cocktailCodes[0]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${firstMenuItem}`} replace />} />
        <Route path={`/:cocktail`} element={<CocktailPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>)
}