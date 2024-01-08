import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Login = lazy(() => import("./Pages/Login"));
const Products = lazy(() => import("./Pages/Products"));
const Product = lazy(() => import("./Pages/Product"));



function App() {
  useEffect(() => {
    localStorage.getItem("token");
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={"is Loading..."}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
