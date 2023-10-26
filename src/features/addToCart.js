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
        }
    }
})

export const { increment } = cartSlice.actions
export default cartSlice.reducer