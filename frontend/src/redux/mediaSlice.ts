import { createAsyncThunk } from "@reduxjs/toolkit"


const BASEURL = "http://localhost:8080/socials"

export const fetchIGFollower = createAsyncThunk(
    "media/fetchIGFollower",
    async (_, { rejectWithValue }) => {
        try {

        }
        catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message || "fetch failed")
            }
            return rejectWithValue("fetch failed")
        }
    }
)