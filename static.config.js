import Axios from './node_modules/axios';


// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  devServer: {},
  getRoutes: async () => {
    
    const { data: posts } = await Axios.get('http://localhost:3001/posts/?_limit=10&_page=1')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
        }),
      },
      {
        path: '/new-post',
        component: 'src/containers/New',
      },
    ]
  },
}
