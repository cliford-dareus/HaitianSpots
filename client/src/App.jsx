import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Layout from "./Components/Layout";
import Locations from "./Pages/Locations";
import { GlobalStyles } from "./Utils/styles/GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
