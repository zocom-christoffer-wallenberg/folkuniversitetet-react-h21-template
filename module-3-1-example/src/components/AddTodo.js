function AddTodo({ update }) {
    let newTodo = '';

    function handleInput(event) {
        console.log(event.target.value);
        newTodo = event.target.value;
    }

    function handleClick() {
        console.log('Lägger till todo');
        update(newTodo);
    }

    return (
        <section>
            <input type="text" placeholder="Ny todo" onKeyUp={ handleInput } />
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    )
}

export default AddTodo;