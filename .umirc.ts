import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 9999,
  },
  routes: [{ 
    path: '/', 
    component: '@/pages/index',
    routes:[
      {
        path:'/',
        component:'@/pages/Discovery'
      }
    ]
  }],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
