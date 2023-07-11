import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    model: false,
    bookingType: '',
    viewModel: false,
}

const modelSlice = createSlice ({
    name: 'model',
    initialState,
    reducers: {
        activateModel: (state, action) => {
            state.model = !state.model
            state.bookingType = action.payload
        },
        modelActivate: (state) => {
            state.viewModel = !state.viewModel
        }
    }
})

export const { activateModel, modelActivate } = modelSlice.actions

export default modelSlice.reducer