import { configureStore } from '@reduxjs/toolkit'
import { heaterSlice} from './slices/headerSlice'

export const store = configureStore({
  reducer: {menuBar: heaterSlice.reducer},
})