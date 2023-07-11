import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    model: false,
    quatationId: 0,
    type: ''
}

const QuatationSlice = createSlice ({
    name: 'auatations',
    initialState,
    reducers: {
        viewModel: (state, action) => {
            state.type = action.payload.type
            state.quatationId = action.payload.id
            state.model = !state.model
        }
        
    }
})

export const { viewModel } = QuatationSlice.actions

export default QuatationSlice.reducer