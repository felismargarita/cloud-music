import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 9999,
  },
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
