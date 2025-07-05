import "./App.css";
import { useGetProdctsListQuery } from "./App/Slices/RTK Query/produtcsApiSlice";

function App() {
  const { isLoading, data, error } = useGetProdctsListQuery({});
  console.log(isLoading, data, error);

  return (
    <>
      <div className="App"></div>
    </>
  );
}

export default App;
