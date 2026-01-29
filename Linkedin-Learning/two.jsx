// React 16.x code​​​​​​‌‌‌‌​​​​​​‌​​​​​​‌​​​‌‌‌‌ below
import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs only once on mount");


    // update with functional upate
    setCount(count + 1) // Infinite loop risk

    // add cleanup function
   
  },[]);  // add dependency array to avoid infinite loop 

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

/* Ignore and do not change the code below */
/**
* Preview function
* This function renders the `App` component and is used for visual rendering
* during the challenge. Candidates do not need to modify this.
*/
export function Preview() {
 return <App />;
}
/* Ignore and do not change the code above */

// Export the main App component
export default App;


