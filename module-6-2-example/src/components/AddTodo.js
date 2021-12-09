import { useDispatch } from 'react-redux';
import { addNewTodo } from '../actions/todoActions';

function AddTodo() {
    let newTodo = '';
    const dispatch = useDispatch();

    function handleInput(event) {
        console.log(event.target.value);
        newTodo = event.target.value;
    }

    function handleClick() {
        console.log('Lägger till todo');
        dispatch(addNewTodo(newTodo));
    }

    return (
        <section>
            <input type="text" placeholder="Ny todo" onKeyUp={ handleInput } />
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    )
}

export default AddTodo;