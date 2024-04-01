import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const categoriesList = [
    {
        "name": "CRI"
    },
    {
        "name": "OTHERS"
    },
    {
        "name": "Primary"
    },
    {
        "name": "Prince Pipe"
    },
    {
        "name": "PVC BEND COUPLER"
    },
    {
        "name": "PVC FITTINGS"
    },
    {
        "name": "STAR"
    }
]

export const CategoriesSlice = createSlice({
    name: "categories_slicer",
    initialState: {
        value: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(updateAsync.fulfilled, (state, action) => {
            console.log(action)
            state.value = action.payload
        })
    }
})

export const updateAsync = createAsyncThunk(
    "categories_slicer/updateAsync",
    async() => {
        await new Promise((res) => setTimeout(res, 1000))
        return categoriesList
    }
)

export const {  } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;