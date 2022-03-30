import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemonSlice'

const rootReducer =combineReducers({    
    pokemonReducer

})

export const store = () => { 
    return configureStore({
    reducer:  rootReducer
    
});
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
