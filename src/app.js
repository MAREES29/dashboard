import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./app.css";
import ErrorPage from "./pages/error";
import { ProductProvider } from "./context/productContext";
import SingleProduct from "./pages/singleProduct";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    //  Router Implementation
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductProvider>
              <Dashboard />
            </ProductProvider>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
