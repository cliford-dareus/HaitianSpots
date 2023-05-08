import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Layout from "./Components/Layout";
import Locations from "./Pages/Locations";
import Loading from "./Utils/commons/Loading";
import { GlobalStyles } from "./Utils/styles/GlobalStyles";
import Register from './Pages/Register';
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <Loading />
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
