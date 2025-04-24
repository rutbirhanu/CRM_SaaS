import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const BASEURL = "http:/localhost:3000/customer"

export const fetchOrderAnalytics = createAsyncThunk(
  'order/fetchOrderAnalytics',
  async (_, {rejectWithValue}) => {
    try {
      const res = await fetch(`${BASEURL}/orders`, {
        credentials: 'include', 
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

const orderAnalyticsSlice = createSlice({
  name: 'orderAnalytics',
  initialState: {
    totalSales: 0,
    totalOrders: 0,
    totalRevenue: 0,
    salesByCategory: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAnalytics: (state) => {
      state.totalSales = 0;
      state.totalOrders = 0;
      state.totalRevenue = 0;
      state.salesByCategory = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        const { totalSales, totalOrders, totalRevenue, salesByCategory } = action.payload;
        state.totalSales = totalSales;
        state.totalOrders = totalOrders;
        state.totalRevenue = totalRevenue;
        state.salesByCategory = salesByCategory || [];
      })
      .addCase(fetchOrderAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch analytics';
      });
  },
});

export const { resetAnalytics } = orderAnalyticsSlice.actions;
export default orderAnalyticsSlice.reducer;
