import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    form: formSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;