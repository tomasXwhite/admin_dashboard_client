import InitialState, { dataRed } from "../../types/redux/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
    stats: []
};

export const dataSlice = createSlice({
    name: dataRed,
    initialState: initialState,
    reducers: {
        getData: (state, action: PayloadAction<Array<any>>) => {
            console.log("REDUCERRR")
            state.stats = action.payload
        },
        cleanData: (state) => {
            state.stats = []
        }
    },
});

// Action creators are generated for each case reducer function
export const { getData, cleanData } =
    dataSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default dataSlice.reducer;