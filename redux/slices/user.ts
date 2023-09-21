import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	FirstName: string;
	Email: string;
}

const initialState: UserState = {
	FirstName: '',
	Email: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setState(state, action: PayloadAction<UserState>) {
			state = action.payload;
		},
	},
});

export const { setState } = userSlice.actions;
export default userSlice.reducer;
