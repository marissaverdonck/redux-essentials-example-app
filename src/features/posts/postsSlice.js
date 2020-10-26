// The "slice" will contain the data and knows how to handle our posts data.

import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

// Reducer functions need to have some initial data included
// so that the Redux store has those values loaded when the app starts up.

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // postAdded, which will receive two arguments:
  // the current state value, and the action object that was dispatched

  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})
export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
