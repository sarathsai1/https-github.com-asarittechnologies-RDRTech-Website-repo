import React from "react";
import FirstPage from "./Home/FirstPage";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Contect from "./Home/contect";
import Subscribe from "./Home/subscribe/subscribe";
import Aos from "aos";

Aos.init();
function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/about"/>
            <Route path="/contact" element={<Contect/>} />
            

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 