import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComprehensionEcrite from "./pages/ComprehensionEcrite";
import GlobalTest from './pages/GlobalTest';
import MethodologiePage from "./pages/MethodologieEE";
import TarifsSection from "./pages/Tarif";



function RouteApp() {
  return (
      <BrowserRouter>
      
          <Routes>
            <Route path="/">

              <Route index element={<Home />} />
              <Route path="/ce" element={<ComprehensionEcrite />} />
              <Route path="/ce/test" element={<GlobalTest />} />
              <Route path="/ee/methodologie" element={<MethodologiePage />} />
              <Route path="/tarif" element={<TarifsSection />} />

              
            </Route>
          </Routes>
      
      </BrowserRouter>
  );
}

export default RouteApp;