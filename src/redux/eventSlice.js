import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEvents } = eventSlice.actions

export default eventSlice.reducer