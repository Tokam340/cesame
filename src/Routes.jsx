import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComprehensionEcrite from "./pages/ComprehensionEcrite";
import MethodologiePage from "./pages/MethodologieEE";
import TarifsSection from "./pages/Tarif";
import ComprehensionOrale from "./pages/ComprehensionOrale";
import GlobalTestCe from "./pages/GlobalTestCe";
import GlobalTestCo from "./pages/GlobalTestCo";
import ResultatsCe from "./pages/ResultatCe";
import ResultatsCo from "./pages/ResultatCo";
import {ScoreContext} from './constants/Context';
import { useState } from "react";



function RouteApp() {
  const [score, setScore] = useState(null);

  
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <BrowserRouter>
      
          <Routes>
            <Route path="/">

              <Route index element={<Home />} />
              <Route path="/ce" element={<ComprehensionEcrite />} />
              <Route path="/ce/test" element={<GlobalTestCe />} />
              <Route path="/ce/result" element={<ResultatsCe />} />


              <Route path="/co" element={<ComprehensionOrale />} />
              <Route path="/co/test" element={<GlobalTestCo />} />
              <Route path="/co/result" element={<ResultatsCo />} />

              <Route path="/ee/methodologie" element={<MethodologiePage />} />
              <Route path="/tarif" element={<TarifsSection />} />

              
            </Route>
          </Routes>
      
      </BrowserRouter>
    </ScoreContext.Provider>
  );
}

export default RouteApp;