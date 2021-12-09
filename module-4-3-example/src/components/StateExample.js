import { useState } from 'react';

function StateExample() {
    const [counter, setCounter] = useState(0);

    function increase() {
        setCounter(counter + 1);
    }

    function decrease() {
        setCounter(counter - 1);
    }

    return (
        <section>
            <p>Counter: { counter }</p>
            <button onClick={ increase }>Öka</button>
            <button onClick={ decrease }>Minska</button>
        </section>
    )
}

export default StateExample;