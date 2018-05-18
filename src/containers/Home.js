import React from 'react'
import { withRouteData, Link } from 'react-static'

//

export default withRouteData(({posts}) => (
  <div>
    {posts.map(post => (
      <li key={post.slug}>
        <Link to = {`/post/${post.slug}/`}>{post.slug}</Link>
      </li>
    ))}    
  </div>
))
