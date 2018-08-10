import React from 'react'
import { RouteData, Head } from 'react-static'
import Post from 'components/post'



export default () => (
  <RouteData
    render={({ post }) => (
      <div>
        <Head>
          <title>{post.title.rendered} | React Static</title>
        </Head>
        
        <Post key={post.id} name={post.title.rendered} email={post.author}>
          <h3 className="post__author">
              {post.title.rendered}
          </h3>
          <span dangerouslySetInnerHTML={{__html: post.content.rendered}} />
          
        </Post>
      </div>
    )}
  />
)
