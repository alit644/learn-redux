import { useEffect } from "react";
import "./App.css";
import { fetchProducts } from "./App/Slices/productsSlice";
import { useAppDispatch, useAppSelector } from "./App/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  } ,[dispatch])
  const {isLoading  , error} = useAppSelector((state) => state.products)
  // console.log(data.products)
  return <>
    <div className="App">
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
    </div>
  </>;
}

export default App;
