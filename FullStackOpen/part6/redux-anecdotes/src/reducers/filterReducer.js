const filterReducer = (state = "", action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'CREATED_FILTER': {
      return action.payload
    }
    default:
      return state
  }
}


export const createdFilter = content => {
  return {
    type: "CREATED_FILTER",
    payload: content
  }
}

export default filterReducer
