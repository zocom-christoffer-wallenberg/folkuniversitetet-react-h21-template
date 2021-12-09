import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  const heading = 'Todo App';
  let todos = [
    { task: 'Köp kaffe', done: true, id: 1 },
    { task: 'Köp kaka', done: false, id: 2 },
    { task: 'Brygg kaffe', done: false, id: 3 },
    { task: 'Drick kaffe', done: false, id: 4 }
  ]

  function updateTodos(newTodo) {
    console.log('I updateTodo');

    const todo = {
      task: newTodo,
      done: false,
      id: todos.length + 1
    }

    todos.push(todo);
    console.log('Todo array: ', todos);
  }

  return (
    <div className="App">
      <h1>{ heading }</h1> { /* Allt inom {} tolkas som vanilla JS */ }
      <ul>
        <TodoItem task={ todos[0].task } done={ todos[0].done } />
        <TodoItem task={ todos[1].task } done={ todos[1].done } />
        <TodoItem task={ todos[2].task } done={ todos[2].done } />
        <TodoItem task={ todos[3].task } done={ todos[3].done } />
      </ul>
      <AddTodo update={ updateTodos } />
    </div>
  );
}

export default App;
