import "./App.css";
import { Routes, Route } from "react-router-dom";

import FavoritePages from "./pages/FavoritePages";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

function App() {
   return (
      <>
         <Navigation />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritePages />} />
         </Routes>
      </>
   );
}

export default App;
