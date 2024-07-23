
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,incrementAmount ,incrementAsync} from './state/counterSlice/counter';
function App() {
 const counter= useSelector(state=>state.counter)
 const Dispatch=useDispatch()
  console.log(counter)
  return (
    <div className="App">
      {counter.value}
      <button onClick={()=>Dispatch(incrementAsync(20))}>increment</button>
      <button onClick={()=>Dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
