import React from 'react'
import { RouteData, Head } from 'react-static'

import PostForm from 'components/postForm'


export default () => (
  <RouteData
    render={({ post }) => (
      <div>
        <Head>
          <title>New Post | React Static</title>
        </Head>
        
        <PostForm />
      </div>
    )}
  />
)
