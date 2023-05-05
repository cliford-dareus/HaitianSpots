import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Location from "./Components/Location";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import Entry from "./Pages/Entries";
import { AppContainer } from "./Utils/Styles";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CreateLocation from "./Pages/CreateLocation";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContainer>
      <SideBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />} />
        <Route path="/place/:id" element={<Location />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateLocation />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
