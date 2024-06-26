import { decrement, increment, incrementBy } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {

  const dispatch = useAppDispatch()
  const {count} =useAppSelector((state)=>state.counter)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-8 border border-purple-600 p-16 bg-gray-200 rounded">
      <button onClick={()=>dispatch(incrementBy(5))} className="text-lg font-semibold px-4 py-2 rounded bg-green-600 text-white">
          Increment by 5
        </button>
        <button onClick={()=>dispatch(increment())} className="text-lg font-semibold px-4 py-2 rounded bg-green-600 text-white">
          Increment
        </button>
        <span className="text-3xl font-bold">{count}</span>
        <button onClick={()=>dispatch(decrement())} className="text-lg font-semibold px-4 py-2 rounded bg-red-600 text-white">Decrement</button>
      </div>
    </div>
  );
}

export default App;
