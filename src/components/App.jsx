import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./Loader";

const HomePage = lazy(() => { import('pages/HomePage') });
const CatalogPage = lazy(() => { import('pages/CatalogPage') });
const FavoritePage = lazy(() => { import('pages/FavoritePage') });
// import HomePage from "pages/HomePage";
// import CatalogPage from "pages/CatalogPage";
// import FavoritePage from "pages/FavoritePage";

const App = () => {


  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
    </Suspense>
  );
};
 
export default App;