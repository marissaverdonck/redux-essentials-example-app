import React from 'react'
// Read data from the Redux store using the useSelector
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// read the state.posts value from the Redux store,
// then loop over the array of posts and show each of them on screen.

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
