import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState:"",
  reducers: {
    createdFilter(state, action) {
      return action.payload
    },
  },
})

export const { createdFilter } = filterSlice.actions
export default filterSlice.reducer