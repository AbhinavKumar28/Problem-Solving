// React 16.x code​​​​​​‌‌‌‌​​​​​‌​‌‌​​‌‌​​​‌‌‌​​ below
import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)
  // useEffect triggers on every render due to missing dependency array
  useEffect(() => {
    (async () =>{
      try{
        const data = await fetch('https://randomuser.me/api')
        const data_json = await data.json()
        setUser(data_json.results[0]);
        // console.log(data, data_json)
      }catch (e){
        setError(e.message)
      }})();
      return (()=>{})
    },
      []);

  // Button doesn't do anything
  const handleClick = async() => {
    const data = await fetch('https://randomuser.me/api')
        const data_json = await data.json()
        setUser(data_json.results[0]);
      
      // Missing: set up user logic
      };
  

  return (
    <div>
      <h1>Random User Generator</h1>
      <button onClick={handleClick}>Get New User</button>

      {/* Incorrect condition, will throw error if user is null */}
      {((user===null)?(<p>Loading user...</p>):(<><p>{user.name.first} {user.name.last}</p>
      <img src={user.picture.medium} alt="User" /></>))}
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

