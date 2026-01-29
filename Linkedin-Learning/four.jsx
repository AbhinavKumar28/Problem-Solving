// React 16.x code​​​​​​‌‌‌‌​​​​​‌​​‌‌‌‌​‌​‌​​‌​​ below
import React, { useState } from 'react';
import { createContext, useContext } from 'react'
/**
* Your task: 
- create a context object;
- create and set the Provider component in the main <App /> component, 
wrapping the components : <Navbar /> and the < Header/> ;
- subscribe components to state changes via the context object.
**/

const ThemeContext = createContext('light')
  

function Header() {
   // read and update the state using context - remove the props
     const theme = useContext(ThemeContext) // "light" if no provider

  return <div style={theme[0]}>
            <h1>Dark or Light</h1>
          <button onClick={() => theme[1](prev => prev === 'light' ? 'dark' : 'light')}>
            Toggle Theme
          </button>
          </div> 
}

function Navbar() {
  // read the state using context - remove the props
  const theme = useContext(ThemeContext) // "light" if no provider

  return <button style={theme[0]}>Menu</button>;
}
function App() {
  const [theme, setTheme] = useState('light');
  
  const style = {
    background: theme === 'dark' ? 'black' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    padding: '10px',
    border: '1px solid #ccc'
  };

  // wrap with the Provider component
  return(<> 
  <ThemeContext.Provider value={[style, setTheme]}><Navbar />
    <Header />
  </ThemeContext.Provider>
    </>) 
  
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

