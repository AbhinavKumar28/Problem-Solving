import { useDispatch } from "react-redux"
import { createdFilter } from "../reducers/filterReducer"
const Filter = () => {
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(createdFilter(event.target.value))
        
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style} className="filter">
      Filter - <input onChange={handleChange} />
    </div>
  )
}

export default Filter
// save state in store and new reducer and action creator and combine reducer
// initial state with reducer call