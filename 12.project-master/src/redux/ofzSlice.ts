import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOFZ } from './ofzActions';

type OFZ = {
	name: string;
	repayment: string;
	yearsUntilRepayment: number;
	profitability: number;
};

type OFZState = {
	data: OFZ[];
	loading: boolean;
	error: string | null;
};

const initialState: OFZState = {
	data: [],
	loading: false,
	error: null,
};

const ofzSlice = createSlice({
	name: 'ofz',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchOFZ.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchOFZ.fulfilled, (state, action: PayloadAction<OFZ[]>) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchOFZ.rejected, (state, action) => {
				state.loading = false;
				state.error = String(action.payload);
			}),
});

export default ofzSlice.reducer;
