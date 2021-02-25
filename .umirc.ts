import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 9999,
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
