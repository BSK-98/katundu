import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: '',
}

const UISlice = createSlice ({
    name: "UISlice",
    initialState,
    reducers: {
        page: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { page } = UISlice.actions

export default UISlice.reducer