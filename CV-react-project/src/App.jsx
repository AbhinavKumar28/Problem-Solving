import FormPart from './components/FormPart.jsx'
import { data } from './data.js'
import './App.css'

function App() {
  return (
    <>
  {Object.keys(data).map((key) => {
    console.log(key)
    return <FormPart
      key={key}
      sec_name={key}
    />
})}
</>

  )
}

export default App
