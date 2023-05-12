import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Layout from "./Components/Layout";
import Places from "./Pages/Places";
import Place from "./Pages/Place";
import Loading from "./Utils/commons/Loading";
import { GlobalStyles } from "./Utils/styles/GlobalStyles";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { forwardRef, useState } from "react";

function App() {
  const Navigate = useNavigate();
  const [containerPosition, setContainerPosition] = useState({});
  const [imagePosition, setImagePosition] = useState({});

  const onItemSelected = (event, item) => {
    const containerTarget = event.currentTarget;
    const imageTarget =
      event.currentTarget.parentElement.parentElement.children[0];

    const containerDimensions = containerTarget.getBoundingClientRect();
    const imageDimensions = imageTarget.getBoundingClientRect();

    // //DOMRect object not iterable, so can't destructure
    setContainerPosition({
      width: containerDimensions.width,
      height: containerDimensions.height,
      top: containerDimensions.top,
      left: containerDimensions.left,
    });

    setImagePosition({
      width: imageDimensions.width,
      height: imageDimensions.height,
      top: imageDimensions.top,
      left: imageDimensions.left,
    });
    // setSelectedItemDetails(item)
    Navigate(`/place/:${item?.list?._id}`);
  };

  return (
    <div>
      <Loading />
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route
              path="/places"
              element={<Places onItemSelected={onItemSelected} />}
            />
            <Route
              path="/place/:id"
              element={
                <Place itemPosition={{containerPosition, imagePosition}} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
