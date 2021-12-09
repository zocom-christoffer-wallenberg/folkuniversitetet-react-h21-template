import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Christoffer');
  const [greeting, setGreeting] = useState('Hej');

  //Körs varje gång state uppdateras
  useEffect(() => {
    console.log('State uppdateras');
  });

  //Körs enbart när komponenten laddas
  useEffect(() => {
    console.log('Körs enbart när komponenten laddas');
  }, []);

  //Körs enbart när greeting(i useState) uppdateras
  useEffect(() => {
    console.log('Nu uppdateras greeting');
  }, [greeting]);

  return (
    <div className="App">
      <input type="text" placeholder="Nytt namn" onKeyUp={ (event) => { setName(event.target.value) }} />
      <button onClick={ () => { setGreeting('Hejsan') }}>Byt hälsning</button>
      <p>{ greeting } { name }</p>
    </div>
  );
}

export default App;
