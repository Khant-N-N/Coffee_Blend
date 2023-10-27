import { createSlice } from "@reduxjs/toolkit";
import { foodMenu } from "../constants/constants";

const getItems = () => {
    let state = {};
    for (const food of foodMenu) {
        state[food.id] = 0
    }
    return state;
}

const initialState = getItems();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            return { ...state, [action.payload]: state[action.payload] + 1 }
        },
        decrement: (state, action) => {
            return { ...state, [action.payload]: state[action.payload] - 1 }
        },
        manualAmount: (state, action) => {
            return { ...state, [action.payload.id]: Number(action.payload.amount) }
        }
    }
})

export const { increment, decrement, manualAmount } = cartSlice.actions
export default cartSlice.reducer