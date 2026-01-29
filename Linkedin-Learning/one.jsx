// React 16.x code​​​​​​‌‌‌‌​​​​​​​‌‌‌‌​​​​‌‌‌‌‌​ below
import React, { memo, useState } from 'react';

/**
* Your task: 

- Move the text state into the InputField component,
- Change <ExpensiveComponent /> into a memoized pure component to cache results from previous render, 
- Prevent ExpensiveComponent from re-rendering on each keystroke,
- Preserve functional behavior — typing into the input should still work.

**/

const ExpensiveComponent = React.memo(function ExpensiveComponent() {
  console.log('Rendering Expensive Component');
  return <div>Heavy UI</div>;
})
function InputField() {
  const [text, setText] = useState('');
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function App() {

  return (
    <>
      <ExpensiveComponent />
      <InputField />
    </>
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


