import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Layout from "./Components/Layout";
import Locations from "./Pages/Locations";
import Loading from "./Utils/commons/Loading";
import { GlobalStyles } from "./Utils/styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Loading />
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
