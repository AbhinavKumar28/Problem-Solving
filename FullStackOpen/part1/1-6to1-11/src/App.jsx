import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button 
      name="good"
      feedback={good}
      setFeedback={setGood}
      />
      <Button 
      name="neutral"
      feedback={neutral}
      setFeedback={setNeutral}
      />
      <Button 
      name="bad"
      feedback={bad}
      setFeedback={setBad}
      />
      <h1>statistics</h1>
      {((good+neutral+bad)!==0)?(<Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      />):(<p>No feedback given</p>)}
    </>
  )
}

export default App