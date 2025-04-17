import { configureStore } from '@reduxjs/toolkit'
import inventorySlice from './inventorySlice'
import customerSlice from "./customerSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      inventory: inventorySlice,
      customer:customerSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

