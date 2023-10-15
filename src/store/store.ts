import { configureStore } from '@reduxjs/toolkit'
import { taskListReducer } from './taskList/taskList.slice'
import { dialogReducer } from './ui/dialog.slice'


export const store = configureStore({
  reducer: {
    taskLists: taskListReducer,
    dialog: dialogReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch