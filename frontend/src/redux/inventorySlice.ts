import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  supplier: string;
  tags: string[];
}

interface InventoryState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: InventoryState = {
  items: [],
  loading: false,
  error: null,
};

const BASEURL = "http:/localhost:3000"

// ✅ Fetch all items (GET)
export const fetchInventory = createAsyncThunk<Product[]>(
  'inventory/fetchInventory',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/inventory/`, {
        credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.text();
        return rejectWithValue(error);
      }

      return await res.json();
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Fetch failed");
      }
      return rejectWithValue("Fetch failed");
    }
    
  }
);


export const addToInventory = createAsyncThunk(
  "inventory/addToInventory",
  async (_, { rejectWithValue }) => {
    try {
      const request = await fetch(`${BASEURL}/add`, {
        credentials : 'include'
      })
  
      const res = await request.json()
      console.log(res)
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Process failed");
      }

      return rejectWithValue("Process failed")
   }
  }
)

// You can add more thunks like addItem, deleteItem, updateItem etc.

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default inventorySlice.reducer;
