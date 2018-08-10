import React from 'react'
import { RouteData, Head, Link } from 'react-static'
import Axios from 'axios'
import Post from 'components/post'
import InfiniteScroll from 'react-infinite-scroller'

//const api = 'https://blog.turbotax.intuit.com/wp-json/wp/v2'
const api = 'http://localhost:3001/posts'


export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      hasMoreItems: true,
      page: 1,
      error: null,
    }
  }

  loadItems () {
    //const url = `${api}/posts/${this.state.page}`;
    const url = `${api}/?_limit=10&_sort=id&_order=desc&_page=${this.state.page}`;

    Axios.get(url)
      .then(resp => {
        if (resp) {
          const posts = this.state.posts
          resp.data.map(post => posts.push(post))

          this.setState({
            posts,
            page: this.state.page + 1,
          })
        }
      }).catch(error => {
        this.setState({
          hasMoreItems: false,
          error,
        })
      })
  }

  render () {
    const loader = <div className="loader">Loading ...</div>;
    const items = []

    const { error } = this.state

    this.state.posts.map((post, i) => {

      const email = post.username || post.userId

      items.push(
        <Post key={i} name={post.title} email={email}>
          <h3 className="post__author">
            {post.title}
          </h3>
          <span dangerouslySetInnerHTML={{ __html: post.body }} />
        </Post>
      )
    })

    return (


      <RouteData
        render={({ posts }) => (
          <div>
            <Head>
              <title>New Post | React Static</title>
            </Head>
            {
              <InfiniteScroll
                pageStart={1}
                loadMore={this.loadItems.bind(this) }
                hasMore={this.state.hasMoreItems}
                loader={loader}
              >

                <div className="posts">
                  {items}
                </div>
              </InfiniteScroll>
            }
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
    )
  }
}
