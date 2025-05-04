import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the customer type
interface Customer {
  // id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  // loyaltyPoints: number;
  // totalSpent: number;
  // lastPurchase: string;
}

interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  loading: false,
  error: null,
};

// -------------------------
// Thunks (async actions)
// -------------------------
const BASEURL = "http:/localhost:8080/customer"


export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const req = await fetch(`${BASEURL}/`, {
        method: "GET",
        // credentials: 'include'
      }
      );
      if (!req.ok) throw new Error("Failed to fetch customers");
      return await req.json();
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")

    }
  });


export const addCustomer = createAsyncThunk(
  "customer/addCustomer",
  async (newCustomer: Customer, { rejectWithValue }) => {
    try {
      const req = await fetch(`${BASEURL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

      if (!req.ok) throw new Error("Failed to fetch customers");
      return await req.json();
    }

    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }
  });


export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (updatedData, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/:${updatedData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) throw new Error("Failed to update customer");
      return await res.json();
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }

  });


export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (customerId, { rejectWithValue }) => {
    try {
      const req = await fetch(`${BASEURL}/:${customerId}`, {
        method: "DELETE",
        credentials: 'include'
      });

      if (!req.ok) throw new Error("Failed to delete customer");
      return customerId;
    }
    
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }

  });



const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      // Add
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })

      // Update
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.customers[index] = action.payload;
        }
      })

      // Delete
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter((c) => c.id !== action.payload.id);
      });
  }
});

export default customerSlice.reducer;
