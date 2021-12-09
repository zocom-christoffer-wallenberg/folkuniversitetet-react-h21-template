import './TodoItem.css';

//Här använder vi "object destructuring" för att plocka ut egenskaper från props-objektet
function TodoItem({ task }) {
    return (
        <li>{ task } </li>
    )
}

export default TodoItem;