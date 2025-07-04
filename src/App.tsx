import "./App.css";
import { useAppDispatch, useAppSelector } from "./App/store";
import { decrement, increment, reset } from "./App/slices/counterSlice";

function App() {
  //! Redux store.  لوصول إلى بيانات من 
  const {value} = useAppSelector((state) => state.counter);

  //! Redux actions.  لوصول إلى دوال من
  const dispatch = useAppDispatch();
  return (
    <>
      {/*  Counter  */}
      <div className= "container mx-auto mt-5 bg-[#f1f1f1] flex flex-col gap-4 items-center p-4 border-2 border-blue-500 rounded-lg">
        <h1 className="text-4xl">Counter</h1>
        <p className="text-6xl">{value}</p>
        <div className="flex gap-4">
          <button onClick={() => dispatch(increment(1))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Increment
          </button>
          <button onClick={() => dispatch(decrement(1))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Decrement
          </button>
            <button onClick={() => dispatch(reset())} className="bg-gray-200 text-black font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
