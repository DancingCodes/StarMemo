import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        incrementToTen(state, action) {
            state.count += action.payload
        },
    }
})

const { increment, decrement, incrementToTen } = counterStore.actions
const counterReducer = counterStore.reducer
export { increment, decrement, incrementToTen }
export default counterReducer