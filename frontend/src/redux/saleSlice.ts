import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const BASEURL = "http:/localhost:8080/sales"

interface Sale{
  itemName: string;
  quantity: number;
  price: number;
  // category: String;
}

export const fetchSales = createAsyncThunk(
  'sales/fetchSales',
  async (_, {rejectWithValue}) => {
    try {
      const res = await fetch(`${BASEURL}/`, {
        method:"GET",
        // credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.message || 'Failed to fetch analytics');
      }

      const data = await res.json();
      return data;
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "fetch failed")
      }
      return rejectWithValue("fetch failed")
    }
  }
);


export const createSale = createAsyncThunk(
  'sales/createSale',
  async (saleData:Sale , { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/add`, {
        method: 'POST',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData),
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue(error.message || 'Failed to create sale');
      }

      return await res.json();
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchSalesSummary = createAsyncThunk(
  'sales/fetchSalesSummary',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/summary`, {
        method: "GET"
        // credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue(error.message || 'Failed to fetch summary');
      }

      return await res.json();
      // totalItemsSold: 
      // totalRevenue: 
      //   totalOrders: 
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchMonthlySales = createAsyncThunk(
  'sales/fetchMonthlySales',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/monthly`, {
        credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue(error.message || 'Failed to fetch monthly sales');
      }

      return await res.json();
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchTopProducts = createAsyncThunk(
  'sales/fetchTopProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/top-products`, {
        credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue(error.message || 'Failed to fetch top products');
      }

      return await res.json();
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchSalesByCategory = createAsyncThunk(
  'sales/fetchSalesByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASEURL}/category-sales`, {
        credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue(error.message || 'Failed to fetch sales by category');
      }

      return await res.json();
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Unknown error occurred');
    }
  }
);


interface SalesState {
  loading: boolean;
  summary: unknown;
  monthly: unknown;
  topProducts: unknown;
  categorySales: unknown;
  error: string | null;
}

const initialState: SalesState = {
  loading: false,
  summary: null,
  monthly: null,
  topProducts: null,
  categorySales: null,
  error: null,
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSalesSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
        state.error = null;
      })
      .addCase(fetchSalesSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchMonthlySales.fulfilled, (state, action) => {
        state.monthly = action.payload;
      })
      .addCase(fetchTopProducts.fulfilled, (state, action) => {
        state.topProducts = action.payload;
      })
      .addCase(fetchSalesByCategory.fulfilled, (state, action) => {
        state.categorySales = action.payload;
      });
  },
});

export default salesSlice.reducer;


