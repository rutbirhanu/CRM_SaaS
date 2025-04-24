import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrderAnalytics = createAsyncThunk(
  'orderAnalytics/fetchOrderAnalytics',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('/api/analytics/orders', {
        credentials: 'include', // If your API requires cookies/auth
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        return thunkAPI.rejectWithValue(errorData.message || 'Failed to fetch analytics');
      }

      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || 'Unexpected error');
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
