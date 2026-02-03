const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD': {
      const good_value = state.good+1
      return {
        ...state,
        good:good_value
      }
    }
    case 'OK':{
      const ok_value = state.ok+1
      return {
        ...state,
        ok:ok_value
      }
    }
    case 'BAD':{
      const bad_value = state.bad+1
      return {
        ...state,
        bad:bad_value
      }
    }
    case 'RESET':{
      return {
        good: 0,
        ok: 0,
        bad: 0
      }
    }
    default:
      return state
  }
}

export default counterReducer


