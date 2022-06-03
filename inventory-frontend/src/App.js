import { Products } from "./components/Products";
import { ProductsCreate } from "./components/ProductsCreate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<ProductsCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;