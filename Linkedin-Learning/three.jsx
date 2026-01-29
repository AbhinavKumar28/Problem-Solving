// React 16.x code​​​​​​‌‌‌‌​​​​​​‌‌​​​​​​​​‌‌​​​ below
import React, { useState, useEffect,useMemo } from 'react';


// 1. Update and create a Memoized Component to avoid re-rendering unless props change
const Item = React.memo(function Item({ item }) {
  console.log('Rendering item:', item.name);
  return <li>{item.name}: {item.score}</li>;
})

// 2. Update and create Memoized Component to avoid re-rendering unless props change
const TotalScore = React.memo(function TotalScore({ items }) {
  console.log('Calculating total score...');

  // 3. Create Memoized value to avoid re-rendering only if a depedency changes
  const total = useMemo(()=>items.reduce((sum, item) => sum + item.score, 0),[items]);
  return <h3>Total Score: {total}</h3>;
})

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Alice', score: 10 },
    { id: 2, name: 'Bob', score: 15 },
    { id: 3, name: 'Charlie', score: 20 },
  ]);

  const [input, setInput] = useState('');

  return (
    <div>
      <h2>Scoreboard</h2>
      <input
        placeholder="Type here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>

      <TotalScore items={items} />
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

