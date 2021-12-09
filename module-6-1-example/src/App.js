import './App.css';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter';
import { increment, decrement } from './actions/counterActions';

function App() {
  const dispatch = useDispatch();

  function increase() {
    dispatch(increment(1));
  }

  function decrease() {
    dispatch(decrement(1));
  }

  return (
    <div className="App">
      <button onClick={ increase }>Öka med 1</button>
      <button onClick={ decrease }>Minska med 1</button>

      <ViewCounter />
    </div>
  );
}

export default App;
