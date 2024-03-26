import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        return [
            {
                name: "first one",
                image: "",
            },
            {
                name: "second one",
                image: "",
            },
            {
                name: "third one",
                image: "",
            },
        ]
    }
)

export const {  } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;