import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const BASEURL = "http://localhost:8080/socials"


// pass the name of the 
export const fetchIGFollower = createAsyncThunk(
    "media/fetchIGFollower",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASEURL}/instagram-stat`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                const errorData = await res.json();
                return rejectWithValue(errorData.message || 'Failed to fetch analytics');
            }

            const data = await res.json();
            // console.log(data)

            return data;
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message || "fetch failed")
            }
            return rejectWithValue("fetch failed")
        }
    }
)

interface mediaState {
    IGFollower: number,
    loading: boolean,
    error: string | null;
}
const initialState: mediaState = {
    IGFollower: 0,
    loading: false,
    error: null
}

const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchIGFollower.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchIGFollower.fulfilled, (state, action) => {
                state.loading = false
                state.IGFollower = action.payload
            })
            .addCase(fetchIGFollower.rejected, (state, action) => {
            state.error = action.payload as string
        })

    }
})

export default mediaSlice.reducer