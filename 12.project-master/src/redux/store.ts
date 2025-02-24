import { configureStore } from '@reduxjs/toolkit';
import ofzReducer from './ofzSlice';

export const store = configureStore({
	reducer: {
		ofz: ofzReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;