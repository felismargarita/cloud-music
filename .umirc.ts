import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 9999,
  },
  proxy:{
    '/resourcebed': {
      target: 'http://felis.top:8101/',
      pathRewrite: { '^/resourcebed': '' },
      changeOrigin: true
    },
    '/api': {
      // target: 'http://felis.top:9001/',
      target: 'http://localhost:9001/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  favicon:'/cloudmusic/favicon.ico',
  title:'cloud music',
  publicPath:'/cloudmusic/',
  base:'/cloudmusic/',
  routes: [{ 
    path: '/', 
    component: '@/pages/index',
    routes:[
      {
        path:'/',
        component:'@/pages/discovery/Discovery'
      },
      {
        path:'/comment/userlike',
        component:'@/pages/comment/UserLikeComment'
      },
      {
        path:'/test',
        component:'@/pages/Test'
      }
    ]
  }],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
