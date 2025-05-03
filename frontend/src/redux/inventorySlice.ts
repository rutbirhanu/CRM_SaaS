import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
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

const BASEURL = "http:/localhost:3000/inventory"

// ✅ Fetch all items (GET)
export const fetchInventory = createAsyncThunk<Product[]>(
  'inventory/fetchInventory',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/`, {
        method: 'GET',
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
  async (itemData: Product, { rejectWithValue }) => {
    try {
      const req = await fetch(`${BASEURL}/add`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(itemData)
      })

      if (!req.ok) {
        const error = await req.text();
        return rejectWithValue(error);
      }

      const res = await req.json()
      console.log(res)
      return res
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Process failed");
      }

      return rejectWithValue("Process failed")
    }
  }
)

export const fetchItemFromInventory = createAsyncThunk(
  "inventory/fetchItemFromInventory",
  async (itemId, { rejectWithValue }) => {
    try {

      const req = await fetch(`${BASEURL}/:${itemId}`, {
        method: 'GET',
        credentials: 'include'
      })

      if (!req.ok) {
        const error = await req.text();
        return rejectWithValue(error);
      }
      const res = await req.json()

      return res

    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }
  }
)


export const removeItemFromInventory = createAsyncThunk(
  "inventory/removeItemFromInventory",
  async (itemId, { rejectWithValue }) => {
    try {

      const req = await fetch(`${BASEURL}/:${itemId}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (!req.ok) {
        const error = await req.text();
        return rejectWithValue(error);
      }
      const res = await req.json()

      return res

    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }
  }
)


export const updateItemFromInventory = createAsyncThunk(
  "inventory/updateItemFromInventory",
  async (updatedData, { rejectWithValue }) => {
    try {

      const req = await fetch(`${BASEURL}/:${updatedData.id}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(updatedData),
      })

      if (!req.ok) {
        const error = await req.text();
        return rejectWithValue(error);
      }
      const res = await req.json()

      return res

    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
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
      })
      
      // add item
      .addCase(addToInventory.fulfilled, (state, action: PayloadAction<Product>) => {
        state.items.push(action.payload);
      })
      .addCase(addToInventory.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // remove item
      .addCase(removeItemFromInventory.fulfilled, (state, action: PayloadAction<{ id: number }>) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(removeItemFromInventory.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // update item
      .addCase(updateItemFromInventory.fulfilled, (state, action: PayloadAction<Product>) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateItemFromInventory.rejected, (state, action) => {
        state.error = action.payload as string;
      })

  },
});

export default inventorySlice.reducer;
