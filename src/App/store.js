import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./Features/AuthSlice/AuthSlice"
import modleReducer from "./Features/Orders/modelSlice"
import UIReducer from "./Features/UI/UISlice"
import QuatationReducer from "./Features/Quatation/QuatationSlice"


const store = configureStore ({
    reducer: {
        auth: authReducer,
        model:  modleReducer,
        UISlice: UIReducer,
        auatations: QuatationReducer
    }
})

export default store