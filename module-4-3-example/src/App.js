import { useState, useEffect } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import StateExample from './components/StateExample';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  const heading = 'Todo App';
  const [todos, setTodos] = useState([]);

  //Vid sidladdning så gör ett API-anrop och hämta todos
  //Spara sedan våra todos i vårt state
  useEffect(() => {
    async function getTodos() {
      const respone = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
      const data = await respone.json();
      console.log('Från API: ', data);

      setTodos(data.todos);
    }

    getTodos();
  }, []); //Körs enbart vid sidladdning

  useEffect(() => {
    alert('Ny todo tillagd');
  }, [todos]); //Körs när todos uppdateras

  function updateTodos(newTodo) {
    console.log('I updateTodo');

    const todo = {
      task: newTodo,
      done: false,
      id: todos.length + 1
    }

    // let copyTodos = [...todos];
    // const newTodos = copyTodos.concat(todo);
    // setTodos(newTodos);

    //Vi skickar in en funktion där vi får ut nuvarande todos-array och sen kopierar
    //vi denna array med spread-operatorn(...) också lägger till den nya todo:n som
    //resulterar i en ny array som sparas i vårt state
    setTodos(currentTodos => {
      return [...currentTodos, todo];
    });
    console.log('Todo array: ', todos);
  }

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

        { /* Hårdkodat antal komponenter*/ }
        {/* <TodoItem task={ todos[0].task } done={ todos[0].done } />
        <TodoItem task={ todos[1].task } done={ todos[1].done } />
        <TodoItem task={ todos[2].task } done={ todos[2].done } />
        <TodoItem task={ todos[3].task } done={ todos[3].done } /> */}
      </ul>
      <AddTodo update={ updateTodos } />

      <StateExample />
    </div>
  );
}

export default App;