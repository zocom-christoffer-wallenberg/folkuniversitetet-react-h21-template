import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import StateExample from './components/StateExample';

import { addAllTodos } from './actions/todoActions';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  const heading = 'Todo App';
  const dispatch = useDispatch();
  const todos = useSelector((state) => { return state.todos });

  //Vid sidladdning så gör ett API-anrop och hämta todos
  //Spara sedan våra todos i vårt state
  useEffect(() => {
    async function getTodos() {
      const respone = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
      const data = await respone.json();
      console.log('Från API: ', data);

      dispatch(addAllTodos(data.todos));
    }

    getTodos();
  }, []); //Körs enbart vid sidladdning
 
  return (
    <div className="App">
      <h1>{ heading }</h1> { /* Allt inom {} tolkas som vanilla JS */ }
      <ul>
        { /** Loopar ut med array-metoden map som returnerar en komponent för varje objekt i arrayen
         * och skickar med varje objekt som props till TodoItem
         */}
        { todos.map((todo) => {
          return <TodoItem task={ todo.task } key={ todo.id } />
        })}
      </ul>
      <AddTodo />

      <StateExample />
    </div>
  );
}

export default App;