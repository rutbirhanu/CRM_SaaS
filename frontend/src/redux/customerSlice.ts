import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the customer type
interface Customer {
  id: number;
  name: string;
  email: string;
  loyaltyPoints: number;
  lastPurchase: string;
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
const BASEURL = "http:/localhost:3000/customer"


export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
  async (_, {rejectWithValue}) => {
    try {
      const req = await fetch(`${BASEURL}/add`,{
        method: "POST",
        credentials: 'include'
      }
    );
    if (!req.ok) throw new Error("Failed to fetch customers");
    return await req.json();
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      
    }
    
});

export const addCustomer = createAsyncThunk("customers/addCustomer", async (newCustomer: Omit<Customer, "id">) => {
  const res = await fetch("/api/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCustomer),
  });
  if (!res.ok) throw new Error("Failed to add customer");
  return await res.json();
});

export const updateCustomer = createAsyncThunk("customers/updateCustomer", async (updatedCustomer: Customer) => {
  const res = await fetch(`/api/customers/${updatedCustomer.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedCustomer),
  });
  if (!res.ok) throw new Error("Failed to update customer");
  return await res.json();
});

export const deleteCustomer = createAsyncThunk("customers/deleteCustomer", async (customerId: number) => {
  const res = await fetch(`/api/customers/${customerId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete customer");
  return customerId;
});

// -------------------------
// Slice
// -------------------------

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
        state.customers = state.customers.filter((c) => c.id !== action.payload);
      });
  },
});

export default customerSlice.reducer;
