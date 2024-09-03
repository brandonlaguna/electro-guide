import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import evaluationSlice from "./slices/evaluationSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    evaluation: evaluationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
