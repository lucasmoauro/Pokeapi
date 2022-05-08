import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
	name: "pagination",
	initialState: 1,
	reducers: {
		pagination: (state, action) => {
			return (state = action.payload);
		},
	},
});

export const { pagination } = paginationSlice.actions;

export default paginationSlice.reducer;
