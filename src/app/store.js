import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
// Every time we create a new slice, we need to add its reducer function to our Redux store.
// It contains the name of the slice followed by "Reducer"

// The data for state.posts will be updated by the postsReducer function
// when actions are dispatched.

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
