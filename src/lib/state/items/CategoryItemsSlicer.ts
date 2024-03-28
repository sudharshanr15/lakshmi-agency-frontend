import { get_category_items } from "@/lib/server_api/api";
import { CategoryItemStateResponse, CategoryItemServerResponse } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";

const initialValue: CategoryItemStateResponse = {
    value: {
        data: [],
    }
}

export const CategoryItemsSlicer = createSlice({
    name: "category_items_slicer",
    initialState: {
        value: {
            data: [],
        }
    },
    reducers: {
        updateData: (state: CategoryItemStateResponse, action: PayloadAction<CategoryItemServerResponse[]>) => {
            state.value.data = [...action.payload]
        }
    }
})

export const { updateData } = CategoryItemsSlicer.actions

export default CategoryItemsSlicer.reducer;