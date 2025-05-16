import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const BASEURL = "http://localhost:8080/socials"

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
    IGFollower : number,
    loading: boolean,
    error:boolean
}
const initialState:mediaState  = {
    IGFollower : 0,
    loading: false,
    error:false
}
