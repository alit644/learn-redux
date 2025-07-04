import "./App.css";
import ProductCard from "./components/card";
import Navbar from "./components/Navbar";
import { products } from "./data";



function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            product= {product}
            
          />
        ))}
      </div>
    </>
  );
}

export default App;
