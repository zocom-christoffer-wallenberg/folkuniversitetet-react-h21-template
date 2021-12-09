import './TodoItem.css';

//Här använder vi "object destructuring" för att plocka ut egenskaper från props-objektet
function TodoItem({ task, done }) {
    let isDone = 'Ej klar'

    if (done) {
        isDone = 'Klar';
    }

    return (
        <li>{ task } - { isDone }</li>
    )
}

export default TodoItem;