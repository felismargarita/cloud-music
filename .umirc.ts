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
      }
    ]
  }],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
