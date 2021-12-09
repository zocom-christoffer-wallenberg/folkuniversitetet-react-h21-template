import './App.css';

import TodoItem from './components/TodoItem';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  const heading = 'Todo App';

  return (
    <div className="App">
      <h1>{ heading }</h1> { /* Allt inom {} tolkas som vanilla JS */ }
      <ul>
        <TodoItem task="Köp kaffe" done={ false } />
        <TodoItem task="Köp kaka" done={ true } />
        <TodoItem task="Brygg kaffe" done={ false } />
        <TodoItem task="Drick kaffe" done={ false } />
      </ul>
    </div>
  );
}

export default App;
