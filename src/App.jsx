import React from "react";
import DisplayAllProducts from "./components/DisplayAllProducts";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextAreaPro from "./components/textareapro/TextAreaPro";
import DisplaySinlgeProduct from "./components/DisplaySinlgeProduct";
import Navlist from "./components/navbar/navlist/Navlist";
const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/myapp1"
            element={
              <>
                <DisplayAllProducts />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <TextAreaPro />
              </>
            }
          />

          <Route
            path="/singleproduct/:pid"
            element={
              <>
                <DisplaySinlgeProduct />
              </>
            }
          />

          <Route
            path="myapp3"
            element={
              <>
                <h1>App3 will be Uploaded soon...</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
