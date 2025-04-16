import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async () => {
      const response = await fetch('/inventory', {
        
    }) // backend endpoint
    return response.data
  }
)

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchInventory.rejected, (state) => {
        state.loading = false
      })
  },
})

export default inventorySlice.reducer
