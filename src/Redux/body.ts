import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	bodyClassName: string
}

const initialState: CounterState = {
	bodyClassName: 'inactive',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setBodyClassName: (state, action: PayloadAction<string>) => {
      state.bodyClassName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBodyClassName } = counterSlice.actions

export default counterSlice.reducer