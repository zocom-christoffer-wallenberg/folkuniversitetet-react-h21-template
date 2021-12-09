import './TodoItem.css';

//Här använder vi "object destructuring" för att plocka ut egenskaper från props-objektet
function TodoItem({ task, done }) {
    return (
        <li>{ task } - { done ? 'Klar' : 'Ej klar' } { /* Kallas för tenary operator */ }</li>
    )
}

export default TodoItem;