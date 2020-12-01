import React, { useState } from 'react'

 function Counter(props) {
    
    const [count, setCount] = useState(0);

    return (
        <div>
          <div  data-test="counter-display" >You clicked {count} times</div>
          <button data-test="increment-button" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}

export default Counter