import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

import appHeight from "./appHeight" // Needs to be imported to work

// ====== COMPONENTS ======
import Landing from "./Landing";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
       
      </Routes>
    </Router>
  );
}

export default App;

